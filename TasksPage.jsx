import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckSquare, Clock, Star } from 'lucide-react'

const TasksPage = () => {
  const navigate = useNavigate()

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
        <h1 className="text-xl font-bold text-foreground">المهام</h1>
      </div>

      <div className="p-4">
        {/* Task Status Card */}
        <Card className="goldearn-card mb-6">
          <CardContent className="p-6 text-center">
            <CheckSquare className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-2">مهام اليوم</h2>
            <p className="text-muted-foreground mb-4">
              أكمل المهام اليومية واحصل على أرباح فورية
            </p>
            <div className="flex items-center justify-center space-x-4 space-x-reverse mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-xs text-muted-foreground">مهام متاحة</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">0</div>
                <div className="text-xs text-muted-foreground">مهام مكتملة</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Tasks */}
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-semibold text-foreground">المهام المتاحة</h3>
          
          <Card className="goldearn-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Star className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">مهمة يومية</h4>
                    <p className="text-sm text-muted-foreground">إكمال استبيان بسيط</p>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-primary">50 EGP</div>
                  <div className="text-xs text-muted-foreground">مكافأة</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>5 دقائق</span>
                </div>
                <Button 
                  className="goldearn-button"
                  onClick={() => navigate('/task-level')}
                >
                  بدء المهمة
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Task Rules */}
        <Card className="goldearn-card">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">قواعد المهام</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• يمكن إكمال مهمة واحدة يوميًا للمتدربين</li>
              <li>• المكافآت تُضاف فوريًا إلى رصيدك</li>
              <li>• المهام متاحة لمدة 4 أيام للمتدربين الجدد</li>
              <li>• اشترك في VIP للحصول على مهام أكثر وأرباح أعلى</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TasksPage

