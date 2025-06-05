import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import GlassPanel from '@/components/GlassPanel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Phone, Shield, Bell, CreditCard, Settings, Edit, Save, X } from 'lucide-react';
import Logo from '@/components/Logo';

const Account: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: ''
  });
  const [notifications, setNotifications] = useState({
    disbursements: true,
    emergencyApproval: true,
    loanUpdates: false,
    marketingEmails: false
  });
  const [security, setSecurity] = useState({
    twoFactor: true,
    biometric: false,
    emailAlerts: true
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    console.log('Profile saved:', profile);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header with Logo */}
        <div className="flex items-center gap-4 mb-8">
          <Logo size="lg" />
          <div>
            <h1 className="text-3xl font-bold text-gradient">
              Account Settings
            </h1>
            <p className="text-copper-400/80 text-sm font-medium tracking-wider">
              MANAGE YOUR PENNYWISE PROFILE
            </p>
          </div>
        </div>

        {/* Profile Section */}
        <GlassPanel className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <User className="w-6 h-6 text-green-400" />
              Profile Information
            </h2>
            {!isEditing ? (
              <Button 
                onClick={() => setIsEditing(true)}
                variant="outline"
                className="border-green-500/30 text-green-400 hover:bg-green-500/10"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button 
                  onClick={handleSaveProfile}
                  className="copper-gradient hover:opacity-90 text-white font-semibold"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button 
                  onClick={handleCancelEdit}
                  variant="outline"
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={profile.avatar} />
                <AvatarFallback className="bg-green-500/20 text-green-400 text-2xl">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Badge variant="outline" className="border-green-500/30 text-green-400">
                Verified Member
              </Badge>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <div>
                <Label htmlFor="name" className="text-white/80">Full Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  disabled={!isEditing}
                  className="bg-white/5 border-white/20 text-white disabled:opacity-60"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white/80">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  disabled={!isEditing}
                  className="bg-white/5 border-white/20 text-white disabled:opacity-60"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-white/80">Phone Number</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  disabled={!isEditing}
                  className="bg-white/5 border-white/20 text-white disabled:opacity-60"
                />
              </div>
            </div>
          </div>
        </GlassPanel>

        {/* Account Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="glass-effect">
            <CardHeader className="pb-2">
              <CardDescription className="text-white/60">Account Age</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-400">127 days</p>
            </CardContent>
          </Card>
          <Card className="glass-effect">
            <CardHeader className="pb-2">
              <CardDescription className="text-white/60">Total Transfers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-copper-400">$12,450</p>
            </CardContent>
          </Card>
          <Card className="glass-effect">
            <CardHeader className="pb-2">
              <CardDescription className="text-white/60">Disbursements</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-emerald-400">18</p>
            </CardContent>
          </Card>
          <Card className="glass-effect">
            <CardHeader className="pb-2">
              <CardDescription className="text-white/60">Emergency Requests</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-copper-400">3</p>
            </CardContent>
          </Card>
        </div>

        {/* Security Settings */}
        <GlassPanel className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-green-400" />
            Security Settings
          </h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">Two-Factor Authentication</h3>
                <p className="text-sm text-white/60">Add an extra layer of security</p>
              </div>
              <Switch 
                checked={security.twoFactor}
                onCheckedChange={(checked) => setSecurity({...security, twoFactor: checked})}
              />
            </div>
            <Separator className="bg-white/10" />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">Email Security Alerts</h3>
                <p className="text-sm text-white/60">Get notified of suspicious activity</p>
              </div>
              <Switch 
                checked={security.emailAlerts}
                onCheckedChange={(checked) => setSecurity({...security, emailAlerts: checked})}
              />
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex gap-4">
              <Button 
                variant="outline"
                className="border-green-500/30 text-green-400 hover:bg-green-500/10"
              >
                Change Password
              </Button>
              <Button 
                variant="outline"
                className="border-copper-500/30 text-copper-400 hover:bg-copper-500/10"
              >
                Download Account Data
              </Button>
            </div>
          </div>
        </GlassPanel>
      </div>
    </AppLayout>
  );
};

export default Account;