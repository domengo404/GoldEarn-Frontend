import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, TrendingUp, Users, DollarSign, Target, Wallet } from 'lucide-react'

const EarningsPage = () => {
  const navigate = useNavigate()

  // Mock earnings data
  const earningsData = {
    totalEarnings: 0,
    level1Registrations: 1,
    level1TopUps: 0,
    totalTeamRegistrations: 1,
    totalTeamTopUps: 0
  }

  const earningsCards = [
    {
      title: 'إجمالي الإيرادات',
      value: `${earningsData.totalEarnings} EGP`,
      icon: Wallet,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'تسجيل وكيل من المستوى الأول',
      value: `${earningsData.level1Registrations} أشخاص`,
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      title: 'إجمالي شحن وكيل من المستوى الأول',
      value: `${earningsData.level1TopUps} EGP`,
      icon: DollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      title: 'إجمالي تسجيل الفريق',
      value: `${earningsData.totalTeamRegistrations} أشخاص`,
      icon: Target,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      title: 'إجمالي شحن الفريق',
      value: `${earningsData.totalTeamTopUps} EGP`,
      icon: TrendingUp,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10'
    }
  ]

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
        <h1 className="text-xl font-bold text-foreground">الإيرادات</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Total Earnings Header */}
        <Card className="goldearn-card">
          <CardContent className="p-6 text-center">
            <Wallet className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-foreground mb-2">إجمالي الإيرادات</h2>
            <div className="text-4xl font-bold text-primary mb-2">{earningsData.totalEarnings}.00 EGP</div>
            <p className="text-sm text-muted-foreground">
              إجمالي أرباحك من الإحالات والعمولات
            </p>
          </CardContent>
        </Card>

        {/* Earnings Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {earningsCards.slice(1).map((card, index) => (
            <Card key={index} className="goldearn-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className={`p-3 rounded-full ${card.bgColor}`}>
                    <card.icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">{card.title}</h3>
                    <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commission Structure */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">هيكل العمولات</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">المستوى الأول</h4>
                    <p className="text-sm text-muted-foreground">المدعوين مباشرة</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">10%</div>
                  <div className="text-xs text-muted-foreground">عمولة</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">المستوى الثاني</h4>
                    <p className="text-sm text-muted-foreground">مدعوي المدعوين</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-400">3%</div>
                  <div className="text-xs text-muted-foreground">عمولة</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">المستوى الثالث</h4>
                    <p className="text-sm text-muted-foreground">المستوى الثالث</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-purple-400">1%</div>
                  <div className="text-xs text-muted-foreground">عمولة</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Tips */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">نصائح لزيادة الأرباح</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium text-foreground">شارك رابطك بانتظام</p>
                  <p className="text-sm text-muted-foreground">كلما زاد عدد المدعوين، زادت أرباحك</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium text-foreground">ساعد المدعوين</p>
                  <p className="text-sm text-muted-foreground">قدم المساعدة للمدعوين لزيادة نشاطهم</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium text-foreground">استخدم وسائل التواصل</p>
                  <p className="text-sm text-muted-foreground">شارك على منصات التواصل الاجتماعي</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Empty State Message */}
        {earningsData.totalEarnings === 0 && (
          <Card className="goldearn-card">
            <CardContent className="p-8 text-center">
              <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">ابدأ في كسب الأرباح</h3>
              <p className="text-muted-foreground mb-4">
                ادع أصدقائك للانضمام واحصل على عمولات من أرباحهم
              </p>
              <button 
                onClick={() => navigate('/referral')}
                className="text-primary font-medium"
              >
                انتقل إلى صفحة الإحالة ←
              </button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default EarningsPage

