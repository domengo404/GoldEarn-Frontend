import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Crown, Star, Zap, Gift } from 'lucide-react'

const VIPPage = () => {
  const navigate = useNavigate()

  const vipLevels = [
    {
      level: 'V1',
      price: '1500 EGP',
      dailyTasks: 1,
      dailyReward: '50 EGP',
      totalReturn: '1500 EGP',
      duration: '30 يوم',
      color: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      level: 'V2',
      price: '4800 EGP',
      dailyTasks: 2,
      dailyReward: '160 EGP',
      totalReturn: '4800 EGP',
      duration: '30 يوم',
      color: 'from-purple-500 to-purple-600',
      popular: false
    },
    {
      level: 'V3',
      price: '15000 EGP',
      dailyTasks: 4,
      dailyReward: '520 EGP',
      totalReturn: '15600 EGP',
      duration: '30 يوم',
      color: 'from-yellow-500 to-yellow-600',
      popular: true
    },
    {
      level: 'V4',
      price: '50400 EGP',
      dailyTasks: 6,
      dailyReward: '1800 EGP',
      totalReturn: '54000 EGP',
      duration: '30 يوم',
      color: 'from-green-500 to-green-600',
      popular: false
    },
    {
      level: 'V5',
      price: '162000 EGP',
      dailyTasks: 10,
      dailyReward: '6000 EGP',
      totalReturn: '180000 EGP',
      duration: '30 يوم',
      color: 'from-red-500 to-red-600',
      popular: false
    },
    {
      level: 'V6',
      price: '304200 EGP',
      dailyTasks: 15,
      dailyReward: '11700 EGP',
      totalReturn: '351000 EGP',
      duration: '30 يوم',
      color: 'from-indigo-500 to-indigo-600',
      popular: false
    },
    {
      level: 'V7',
      price: '650000 EGP',
      dailyTasks: 20,
      dailyReward: '26000 EGP',
      totalReturn: '780000 EGP',
      duration: '30 يوم',
      color: 'from-pink-500 to-pink-600',
      popular: false
    },
    {
      level: 'V8',
      price: '1260000 EGP',
      dailyTasks: 25,
      dailyReward: '52500 EGP',
      totalReturn: '1575000 EGP',
      duration: '30 يوم',
      color: 'from-orange-500 to-orange-600',
      popular: false
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
        <h1 className="text-xl font-bold text-foreground">باقات VIP</h1>
      </div>

      <div className="p-4">
        {/* Header Card */}
        <Card className="goldearn-card mb-6">
          <CardContent className="p-6 text-center">
            <Crown className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-2">اشتراكات VIP</h2>
            <p className="text-muted-foreground mb-4">
              اختر الباقة المناسبة لك واحصل على أرباح يومية مضمونة
            </p>
            <div className="flex items-center justify-center space-x-4 space-x-reverse text-sm">
              <div className="flex items-center space-x-1 space-x-reverse">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">أرباح يومية</span>
              </div>
              <div className="flex items-center space-x-1 space-x-reverse">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">مهام متعددة</span>
              </div>
              <div className="flex items-center space-x-1 space-x-reverse">
                <Gift className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">عوائد مضمونة</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* VIP Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {vipLevels.map((vip, index) => (
            <Card 
              key={index} 
              className={`goldearn-card cursor-pointer hover:scale-105 transition-transform relative ${
                vip.popular ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => navigate(`/vip-details/${vip.level}`)}
            >
              {vip.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-black px-3 py-1 rounded-full text-xs font-bold">
                    الأكثر شعبية
                  </div>
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${vip.color} flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-lg">{vip.level}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">مستوى {vip.level}</h3>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">سعر الباقة:</span>
                    <span className="font-semibold text-foreground">{vip.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">المهام اليومية:</span>
                    <span className="font-semibold text-foreground">{vip.dailyTasks}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">الربح اليومي:</span>
                    <span className="font-semibold text-primary">{vip.dailyReward}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">إجمالي العائد:</span>
                    <span className="font-semibold text-green-400">{vip.totalReturn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">المدة:</span>
                    <span className="font-semibold text-foreground">{vip.duration}</span>
                  </div>
                </div>

                <Button className="w-full goldearn-button">
                  عرض التفاصيل
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <Card className="goldearn-card">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">معلومات مهمة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• جميع الباقات تضمن استرداد المبلغ المدفوع خلال 30 يوم</li>
              <li>• الأرباح اليومية تُضاف تلقائيًا إلى رصيدك</li>
              <li>• يمكن الاشتراك في باقة واحدة فقط في كل مرة</li>
              <li>• المهام بسيطة وتستغرق دقائق قليلة</li>
              <li>• خدمة عملاء متاحة 24/7 لمساعدتك</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default VIPPage

