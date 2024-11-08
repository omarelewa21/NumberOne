<?php

namespace App\Http\Controllers\Admin\settings;

use App\Models\SiteConfig;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SiteConfigController extends Controller
{
    public function editAbout()
    {
        $config = SiteConfig::firstOrFail();
        $aboutSite = $config->about;
        return view('admin.settings.siteConfig.about', ['aboutSite' => $aboutSite]);
    }
    public function updateAbout(Request $request)
    {
        $config = SiteConfig::firstOrFail();
        $data = $request->validate(
            [
                'about' => 'required',
            ],
            [
                'about' => 'حقل عن الموقع مطلوب',
            ]
        );
        $config->update($data);
        $newConfig = SiteConfig::firstOrFail()->about;
        return view('admin.settings.siteConfig.about', ['aboutSite' => $newConfig]);
    }
    public function editPolicy()
    {
        $config = SiteConfig::firstOrFail();
        $aboutSite = $config['privacy-policy'];
        return view('admin.settings.siteConfig.policy', ['aboutSite' => $aboutSite]);
    }
    public function updatePolicy(Request $request)
    {
        $config = SiteConfig::firstOrFail();
        $data = $request->validate(
            [
                'privacy-policy' => 'required',
            ],
            [
                'privacy-policy' => 'حقل عن الموقع مطلوب',
            ]
        );
        $config->update($data);
        $newConfig = SiteConfig::firstOrFail()['privacy-policy'];
        return view('admin.settings.siteConfig.policy', ['aboutSite' => $newConfig]);
    }

    public function editContacts()
    {
        $contacts = SiteConfig::firstOrFail();
        return view('admin.settings.siteConfig.contacts', ['contacts' => $contacts]);
    }

    public function updateContacts(Request $request)
    {
        $config = SiteConfig::firstOrFail();
        $data = $request->validate(
            [
                'phone' => 'required',
                'email' => 'required',
                'address' => 'required',
            ],
            [
                'phone' => 'حقل الهاتف مطلوب',
                'email' => 'حقل البريد الالكتروني مطلوب',
                'address' => 'حقل العنوان مطلوب',
            ]
        );
        $config->update($data);
        $newContacts = SiteConfig::firstOrFail();
        return view('admin.settings.siteConfig.contacts', ['contacts' => $newContacts]);
    }
}
