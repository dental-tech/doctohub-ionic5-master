import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
	{
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'addfeedback',
    loadChildren: () => import('./addfeedback/addfeedback.module').then( m => m.AddfeedbackPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'appointmentbook',
    loadChildren: () => import('./appointmentbook/appointmentbook.module').then( m => m.AppointmentbookPageModule)
  },
  {
    path: 'appointmentdetail',
    loadChildren: () => import('./appointmentdetail/appointmentdetail.module').then( m => m.AppointmentdetailPageModule)
  },
  {
    path: 'appts',
    loadChildren: () => import('./appts/appts.module').then( m => m.ApptsPageModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./blogs/blogs.module').then( m => m.BlogsPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'chatscreen',
    loadChildren: () => import('./chatscreen/chatscreen.module').then( m => m.ChatscreenPageModule)
  },
  {
    path: 'doctroslist',
    loadChildren: () => import('./doctroslist/doctroslist.module').then( m => m.DoctroslistPageModule)
  },
  {
    path: 'chatwithdoctor',
    loadChildren: () => import('./chatwithdoctor/chatwithdoctor.module').then( m => m.ChatwithdoctorPageModule)
  },
  {
    path: 'doctorprofile',
    loadChildren: () => import('./doctorprofile/doctorprofile.module').then( m => m.DoctorprofilePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'finddoctor',
    loadChildren: () => import('./finddoctor/finddoctor.module').then( m => m.FinddoctorPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lab',
    loadChildren: () => import('./lab/lab.module').then( m => m.LabPageModule)
  },
  {
    path: 'labdetails',
    loadChildren: () => import('./labdetails/labdetails.module').then( m => m.LabdetailsPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'medical',
    loadChildren: () => import('./medical/medical.module').then( m => m.MedicalPageModule)
  },
  {
    path: 'medicaldetail',
    loadChildren: () => import('./medicaldetail/medicaldetail.module').then( m => m.MedicaldetailPageModule)
  },
  {
    path: 'medicalmap',
    loadChildren: () => import('./medicalmap/medicalmap.module').then( m => m.MedicalmapPageModule)
  },
  {
    path: 'myfeedbacks',
    loadChildren: () => import('./myfeedbacks/myfeedbacks.module').then( m => m.MyfeedbacksPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'readblog',
    loadChildren: () => import('./readblog/readblog.module').then( m => m.ReadblogPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'specilities',
    loadChildren: () => import('./specilities/specilities.module').then( m => m.SpecilitiesPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'tests',
    loadChildren: () => import('./tests/tests.module').then( m => m.TestsPageModule)
  },
  {
    path: 'select-language',
    loadChildren: () => import('./select-language/select-language.module').then( m => m.SelectLanguagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
