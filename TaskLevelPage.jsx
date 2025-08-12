import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Crown, GraduationCap, Star } from 'lucide-react'

const TaskLevelPage = () => {
  const navigate = useNavigate()

  const levels = [
    {
      id: 'trainee',
      title: 'المتدرب',
      icon: GraduationCap,
      description: 'للمستخدمين الجدد',
      reward: '50 EGP',
      tasks: '1 مهمة يوميًا',
      duration: '4 أيام',
      color: 'text-blue-400',
      available: true
    },
    {
      id: 'vip',
      title: 'VIP',
      icon: Crown,
      description: 'للأعضاء المميزين',
      reward: 'حسب المستوى',
      tasks: 'مهام متعددة',
      duration: 'غير محدود',
      color: 'text-primary',
      available: false
    }
  ]

  const handleLevelSelect = (levelId) => {
    if (levelId === 'trainee') {
      navigate('/survey')
    } else {
      navigate('/vip')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 flex items-center border-b border-border">
        <button 
          onClick={() => navigate('/tasks')}
          className="text-foreground ml-3"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-foreground">اختيار المستوى</h1>
      </div>

      <div className="p-4">
        <div className="text-center mb-6">
          <Star className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">اختر مستواك</h2>
          <p className="text-muted-foreground">
            حدد المستوى المناسب لك لبدء المهام
          </p>
        </div>

        <div className="space-y-4">
          {levels.map((level) => (
            <Card 
              key={level.id} 
              className={`goldearn-card ${level.available ? 'cursor-pointer hover:scale-105' : 'opacity-60'} transition-transform`}
              onClick={() => level.available && handleLevelSelect(level.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <level.icon className={`w-8 h-8 ${level.color}`} />
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{level.title}</h3>
                      <p className="text-sm text-muted-foreground">{level.description}</p>
                    </div>
                  </div>
                  {!level.available && (
                    <div className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      يتطلب اشتراك
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-primary">{level.reward}</div>
                    <div className="text-xs text-muted-foreground">المكافأة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-foreground">{level.tasks}</div>
                    <div className="text-xs text-muted-foreground">المهام</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-foreground">{level.duration}</div>
                    <div className="text-xs text-muted-foreground">المدة</div>
                  </div>
                </div>

                {level.available ? (
                  <Button className="w-full goldearn-button">
                    اختيار هذا المستوى
                  </Button>
                ) : (
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate('/vip')
                    }}
                  >
                    عرض باقات VIP
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <Card className="goldearn-card mt-6">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">معلومات مهمة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• المتدربون الجدد يحصلون على 4 أيام مجانية</li>
              <li>• مهمة واحدة يوميًا بمكافأة 50 جنيه</li>
              <li>• اشترك في VIP للحصول على مهام أكثر وأرباح أعلى</li>
              <li>• جميع المكافآت تُضاف فوريًا إلى رصيدك</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TaskLevelPage

