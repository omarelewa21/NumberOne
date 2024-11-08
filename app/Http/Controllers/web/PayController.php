<?php

namespace App\Http\Controllers\web;

use App\Models\Cart;
use App\Models\Subscription;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Invoice;

class PayController extends Controller
{
    public function pay(Request $request)
    {

        $data = $request->validate(
            [
                "holder_name" => "required",
                "card_number" => "required | numeric ",
            ],
            [
                "holder_name" => "برجاء التحقق من اسم حامل البطاقة",
                "card_number" => "برجاء التحقق من رقم البطاقة",
            ]
        );
        $cart = Cart::where('user_id', auth()->user()->id)->firstOrFail();
        $data = ["user_id" => auth()->user()->id, "course_id" => $cart->course_id];

        if ($request['card_number'] == 1234567891234567) {
            $invoice = Invoice::create([
                'user_id' => $cart->user_id,
                'course_id' => $cart->course_id,
                'course_name' => $cart->course->title,
                'price' => $cart->price,
            ]);
            $data['invoiceNo'] = $invoice->id;
            Subscription::create($data);
            return redirect('/my-courses');
        } else {
            return redirect()->back()->withErrors(['msg' => 'لا يمكن الدفع من خلال هذه البطاقة']);
        }

        /* Pay Mob  Integration */
        // $headers = [
        //     'Content-Type' => 'application/json'
        // ];
        // $token = '{ "api_key": "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RreE16UTNMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuQ1BtQjZpenQyT0lMQUc5TE1PMUppWHVZaXU5OG90bm5UU3oxM0d0QVhsSkk1UWQ4d3gzS1RLdXVuZWQyenZtWk9UQ21FOEJsWF9WbGp0SmFqZkFWUUE="}';
        // $client = new \GuzzleHttp\Client();
        // $request = new \GuzzleHttp\Psr7\Request('POST', 'https://accept.paymob.com/api/auth/tokens', $headers, $token);
        // $res = $client->sendAsync($request)->wait();
        // $auth = json_decode($res->getBody());
        // $newToken =  $auth->token;
    }
}
