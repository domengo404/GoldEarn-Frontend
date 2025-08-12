import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Download, Shield, CheckCircle, Smartphone, HardDrive } from 'lucide-react'

const DownloadAppPage = () => {
  const navigate = useNavigate()

  const appFeatures = [
    {
      icon: Shield,
      title: 'خالي من البرمجيات الخبيثة',
      description: 'تطبيق آمن ومحمي'
    },
    {
      icon: CheckCircle,
      title: 'حماية بنكية',
      description: 'أمان على مستوى البنوك'
    }
  ]

  const requirements = [
    {
      icon: Smartphone,
      title: 'أندرويد 10+',
      description: 'متوافق مع الإصدارات الحديثة'
    },
    {
      icon: HardDrive,
      title: 'مساحة 50MB',
      description: 'مساحة تخزين مطلوبة'
    }
  ]

  const handleDownload = () => {
    // Simulate download - in real app this would redirect to actual download
    alert('سيتم توجيهك إلى متجر التطبيقات لتنزيل التطبيق')
    // window.open('https://play.google.com/store/apps/details?id=com.goldearn.app', '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 flex items-center border-b border-border">
        <button 
          onClick={() => navigate('/profile')}
          className="text-foreground ml-3"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-foreground">تنزيل GoldEarn تطبيق</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* App Preview */}
        <Card className="goldearn-card">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold text-primary mb-2">GoldEarn تنزيل تطبيق</h2>
            <p className="text-muted-foreground mb-6">
              كاملة على هاتفك VIP احصل على تجربة
            </p>
            
            {/* Phone Mockup */}
            <div className="relative mx-auto mb-6 w-48 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2">
              <div className="w-full h-full bg-background rounded-2xl overflow-hidden">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full goldearn-gradient flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-black">G</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">GoldEarn</h3>
                    <p className="text-sm text-muted-foreground">منصة الاستثمار والأرباح</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Link */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <div className="bg-secondary rounded-lg p-4 mb-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">رابط التنزيل:</p>
              <p className="text-xs text-foreground font-mono break-all">
                play.google.com/store/apps/details?id=com.goldearn.app
              </p>
            </div>
            
            <Button 
              className="w-full goldearn-button text-lg py-6"
              onClick={handleDownload}
            >
              <Download className="w-6 h-6 ml-3" />
              تنزيل الآن
            </Button>
          </CardContent>
        </Card>

        {/* App Features */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">مميزات التطبيق</h3>
            <div className="grid grid-cols-1 gap-4">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 space-x-reverse p-4 bg-secondary rounded-lg">
                  <div className="p-2 rounded-full bg-green-500/20">
                    <feature.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Requirements */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">متطلبات النظام</h3>
            <div className="grid grid-cols-1 gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center space-x-3 space-x-reverse p-4 bg-secondary rounded-lg">
                  <div className="p-2 rounded-full bg-primary/20">
                    <req.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{req.title}</h4>
                    <p className="text-sm text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">لماذا تحتاج التطبيق؟</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 space-x-reverse">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">سهولة الوصول</p>
                  <p className="text-sm text-muted-foreground">وصول سريع لحسابك من أي مكان</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">إشعارات فورية</p>
                  <p className="text-sm text-muted-foreground">تنبيهات عن المهام الجديدة والأرباح</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">أداء محسن</p>
                  <p className="text-sm text-muted-foreground">تجربة أسرع وأكثر سلاسة</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">أمان إضافي</p>
                  <p className="text-sm text-muted-foreground">حماية متقدمة لبياناتك المالية</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="goldearn-card">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">تحتاج مساعدة في التنزيل؟</h4>
            <p className="text-sm text-muted-foreground">
              إذا واجهت أي مشكلة في تنزيل أو تثبيت التطبيق، تواصل معنا:
              <br />
              <span className="text-primary font-medium">support@goldearn.com</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DownloadAppPage

