import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, QrCode, Share, Copy, CheckCircle, Users, DollarSign } from 'lucide-react'

const ReferralPage = () => {
  const [copied, setCopied] = useState(false)
  const navigate = useNavigate()

  // Mock user referral data
  const referralCode = 'XYZ987'
  const referralLink = `https://www.goldearn.com/register?ref=${referralCode}`

  const commissionLevels = [
    { level: '10%', title: 'عمولة المستوى الأول', description: 'من أرباح المدعوين مباشرة' },
    { level: '3%', title: 'عمولة المستوى الثاني', description: 'من أرباح مدعوي المدعوين' },
    { level: '1%', title: 'عمولة المستوى الثالث', description: 'من أرباح المستوى الثالث' }
  ]

  const profitPlan = [
    { level: 'متدرب', deposit: '0', tasks: '1', dailyIncome: '50', monthlyIncome: '——', totalIncome: '——' },
    { level: 'V1', deposit: '1500', tasks: '1', dailyIncome: '50', monthlyIncome: '1500', totalIncome: '18250' },
    { level: 'V2', deposit: '4800', tasks: '2', dailyIncome: '160', monthlyIncome: '4800', totalIncome: '58400' },
    { level: 'V3', deposit: '15000', tasks: '4', dailyIncome: '520', monthlyIncome: '15600', totalIncome: '189800' },
    { level: 'V4', deposit: '50400', tasks: '6', dailyIncome: '1800', monthlyIncome: '54000', totalIncome: '657000' },
    { level: 'V5', deposit: '162000', tasks: '10', dailyIncome: '6000', monthlyIncome: '180000', totalIncome: '2190000' },
    { level: 'V6', deposit: '304200', tasks: '15', dailyIncome: '11700', monthlyIncome: '351000', totalIncome: '4270500' },
    { level: 'V7', deposit: '650000', tasks: '20', dailyIncome: '26000', monthlyIncome: '780000', totalIncome: '9480000' },
    { level: 'V8', deposit: '1260000', tasks: '25', dailyIncome: '52500', monthlyIncome: '1575000', totalIncome: '19162500' },
    { level: 'شريك جديد', deposit: '5200000', tasks: '100', dailyIncome: '2600000', monthlyIncome: '78000000', totalIncome: '948000000' }
  ]

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareReferral = () => {
    if (navigator.share) {
      navigator.share({
        title: 'انضم إلى GoldEarn',
        text: 'احصل على أرباح يومية مضمونة!',
        url: referralLink
      })
    } else {
      copyToClipboard(referralLink)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 flex items-center border-b border-border">
        <button 
          onClick={() => navigate('/home')}
          className="text-foreground ml-3"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-foreground">دعوة الأصدقاء</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* QR Code and Link */}
        <Card className="goldearn-card">
          <CardContent className="p-6 text-center">
            <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
              <QrCode className="w-24 h-24 text-black" />
            </div>
            
            <div className="bg-secondary rounded-lg p-4 mb-4">
              <p className="text-sm text-muted-foreground mb-2">رابط الإحالة الخاص بك:</p>
              <p className="text-xs text-foreground font-mono break-all">{referralLink}</p>
            </div>

            <Button 
              className="w-full goldearn-button mb-3"
              onClick={() => copyToClipboard(referralLink)}
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 ml-2" />
                  تم النسخ
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 ml-2" />
                  نسخ الرابط
                </>
              )}
            </Button>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={shareReferral}
            >
              <Share className="w-4 h-4 ml-2" />
              مشاركة الرابط
            </Button>
          </CardContent>
        </Card>

        {/* Commission Levels */}
        <div className="grid grid-cols-3 gap-3">
          {commissionLevels.map((commission, index) => (
            <Card key={index} className="goldearn-card">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-2">{commission.level}</div>
                <div className="text-xs text-muted-foreground">{commission.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Profit Plan Table */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 text-center">
              خطة الأرباح حسب المستوى
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary text-black">
                    <th className="p-2 text-center">المستوى</th>
                    <th className="p-2 text-center">تفعيل الإيداع</th>
                    <th className="p-2 text-center">عدد الاستبيانات اليومية</th>
                    <th className="p-2 text-center">الدخل اليومي</th>
                    <th className="p-2 text-center">دخل 30 يوم</th>
                    <th className="p-2 text-center">دخل 365 يوم</th>
                  </tr>
                </thead>
                <tbody>
                  {profitPlan.map((plan, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? 'bg-secondary' : 'bg-card'} ${
                        plan.level === 'V3' ? 'bg-primary/20' : ''
                      }`}
                    >
                      <td className="p-2 text-center font-semibold text-foreground">{plan.level}</td>
                      <td className="p-2 text-center text-foreground">{plan.deposit}</td>
                      <td className="p-2 text-center text-foreground">{plan.tasks}</td>
                      <td className="p-2 text-center text-foreground">{plan.dailyIncome}</td>
                      <td className="p-2 text-center text-foreground">{plan.monthlyIncome}</td>
                      <td className="p-2 text-center text-foreground">{plan.totalIncome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Level Details */}
        <div className="space-y-4">
          <Card className="goldearn-card">
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center">
                <Users className="w-4 h-4 ml-2 text-primary" />
                المتدرب
              </h4>
              <p className="text-sm text-muted-foreground">
                يمكنك استكمال استبيان في اليوم، والدخل اليومي 160 جنيه، والدخل الشهري 4800 جنيه.
                بعد عدد معين من الشهور تصبح حائزًا على V3 تلقائيًا، أي ما يعادل الاشتراك الأغلى.
                وسيتم إرجاع الإيداع إلى حسابك.
              </p>
            </CardContent>
          </Card>

          <Card className="goldearn-card">
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center">
                <DollarSign className="w-4 h-4 ml-2 text-primary" />
                V1
              </h4>
              <p className="text-sm text-muted-foreground">
                يتطلب إيداع مبلغ 4800 جنيه مصري، ويمكنك استكمال استبيانين في اليوم.
                الدخل اليومي 160 جنيه، والدخل الشهري 4800 جنيه.
                بعد عدد معين من الشهور تصبح حائزًا على V3 تلقائيًا، أي ما يعادل الاشتراك الأغلى.
                وسيتم إرجاع الإيداع إلى حسابك.
              </p>
            </CardContent>
          </Card>

          <Card className="goldearn-card">
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center">
                <DollarSign className="w-4 h-4 ml-2 text-primary" />
                V2
              </h4>
              <p className="text-sm text-muted-foreground">
                يتطلب إيداع مبلغ 4800 جنيه مصري، ويمكنك استكمال استبيانين في اليوم.
                الدخل اليومي 160 جنيه، والدخل الشهري 4800 جنيه.
                بعد عدد معين من الشهور تصبح حائزًا على V3 تلقائيًا، أي ما يعادل الاشتراك الأغلى.
                وسيتم إرجاع الإيداع إلى حسابك.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How it Works */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">كيف يعمل نظام الإحالة؟</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium text-foreground">شارك رابطك</p>
                  <p className="text-sm text-muted-foreground">انسخ رابط الإحالة وشاركه مع أصدقائك</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium text-foreground">التسجيل</p>
                  <p className="text-sm text-muted-foreground">عندما يسجل صديقك باستخدام رابطك</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium text-foreground">احصل على العمولة</p>
                  <p className="text-sm text-muted-foreground">ستحصل على عمولة من أرباحه تلقائيًا</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ReferralPage

