import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { ArrowRight, CheckCircle, Clock } from 'lucide-react'

const SurveyPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const navigate = useNavigate()

  const survey = {
    question: 'ما هو أفضل وقت في اليوم لممارسة الرياضة؟',
    options: [
      { id: 'morning', label: 'الصباح الباكر (6-9 صباحًا)' },
      { id: 'afternoon', label: 'بعد الظهر (12-3 مساءً)' },
      { id: 'evening', label: 'المساء (6-9 مساءً)' },
      { id: 'night', label: 'الليل (9-12 ليلاً)' }
    ]
  }

  const handleSubmit = () => {
    if (selectedAnswer) {
      setIsCompleted(true)
      // Simulate adding reward to balance
      setTimeout(() => {
        navigate('/home')
      }, 3000)
    }
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="goldearn-card w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-2">تم إكمال المهمة!</h2>
            <p className="text-muted-foreground mb-4">
              تهانينا! لقد حصلت على مكافأة
            </p>
            <div className="text-3xl font-bold text-primary mb-4">+50 EGP</div>
            <p className="text-sm text-muted-foreground mb-6">
              تم إضافة المبلغ إلى رصيدك
            </p>
            <div className="animate-pulse text-sm text-muted-foreground">
              سيتم توجيهك إلى الصفحة الرئيسية...
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 flex items-center border-b border-border">
        <button 
          onClick={() => navigate('/task-level')}
          className="text-foreground ml-3"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-foreground">الاستبيان اليومي</h1>
      </div>

      <div className="p-4">
        {/* Progress Card */}
        <Card className="goldearn-card mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">مهمة المتدرب</h3>
                  <p className="text-sm text-muted-foreground">استبيان يومي</p>
                </div>
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-primary">50 EGP</div>
                <div className="text-xs text-muted-foreground">مكافأة</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Survey Question */}
        <Card className="goldearn-card mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-foreground mb-6">
              {survey.question}
            </h2>

            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              <div className="space-y-4">
                {survey.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3 space-x-reverse">
                    <RadioGroupItem 
                      value={option.id} 
                      id={option.id}
                      className="border-primary text-primary"
                    />
                    <Label 
                      htmlFor={option.id} 
                      className="text-foreground cursor-pointer flex-1"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button 
          className="w-full goldearn-button"
          onClick={handleSubmit}
          disabled={!selectedAnswer}
        >
          إرسال الإجابة والحصول على المكافأة
        </Button>

        {/* Info */}
        <Card className="goldearn-card mt-6">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">معلومات</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• اختر أي إجابة للحصول على المكافأة</li>
              <li>• المكافأة ستُضاف فوريًا إلى رصيدك</li>
              <li>• يمكنك إكمال استبيان واحد يوميًا</li>
              <li>• المتدربون الجدد لديهم 4 أيام مجانية</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SurveyPage

