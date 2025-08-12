import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { ArrowRight, CreditCard, Smartphone, Building } from 'lucide-react'

const TopUpPage = () => {
  const [selectedAmount, setSelectedAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const navigate = useNavigate()

  const predefinedAmounts = [50, 100, 200, 500]

  const paymentMethods = [
    {
      id: 'vodafone_cash',
      name: 'فودافون كاش',
      icon: Smartphone,
      color: 'text-red-500'
    },
    {
      id: 'bank_transfer',
      name: 'حوالة بنكية',
      icon: Building,
      color: 'text-blue-500'
    }
  ]

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount.toString())
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value) => {
    setCustomAmount(value)
    setSelectedAmount('')
  }

  const handleNext = () => {
    const amount = selectedAmount || customAmount
    if (amount && paymentMethod) {
      navigate('/topup-payment', { 
        state: { 
          amount: parseFloat(amount), 
          paymentMethod 
        } 
      })
    }
  }

  const finalAmount = selectedAmount || customAmount
  const isFormValid = finalAmount && paymentMethod && parseFloat(finalAmount) >= 50

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
        <h1 className="text-xl font-bold text-foreground">شحن الرصيد</h1>
      </div>

      {/* Progress Steps */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-center space-x-4 space-x-reverse">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center font-bold text-sm">
              1
            </div>
            <span className="text-sm text-primary font-medium mr-2">المبلغ</span>
          </div>
          <div className="w-12 h-0.5 bg-border"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold text-sm">
              2
            </div>
            <span className="text-sm text-muted-foreground mr-2">الدفع</span>
          </div>
          <div className="w-12 h-0.5 bg-border"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold text-sm">
              3
            </div>
            <span className="text-sm text-muted-foreground mr-2">التأكيد</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Amount Selection */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <CreditCard className="w-5 h-5 ml-2 text-primary" />
              اختيار المبلغ
            </h3>
            
            {/* Predefined Amounts */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedAmount === amount.toString()
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-secondary text-foreground hover:border-primary/50'
                  }`}
                >
                  <div className="text-lg font-bold">{amount} EGP</div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">مبلغ آخر</Label>
              <Input
                type="number"
                placeholder="أدخل المبلغ المطلوب"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className="goldearn-input"
                min="50"
                step="0.01"
              />
              <p className="text-xs text-muted-foreground">
                الحد الأدنى للشحن: 50 جنيه
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method Selection */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">طريقة الدفع</h3>
            
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center space-x-3 space-x-reverse">
                    <RadioGroupItem 
                      value={method.id} 
                      id={method.id}
                      className="border-primary text-primary"
                    />
                    <Label 
                      htmlFor={method.id} 
                      className="flex items-center space-x-3 space-x-reverse cursor-pointer flex-1"
                    >
                      <method.icon className={`w-6 h-6 ${method.color}`} />
                      <span className="text-foreground font-medium">{method.name}</span>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Summary */}
        {finalAmount && (
          <Card className="goldearn-card">
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground mb-3">ملخص العملية</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">المبلغ:</span>
                  <span className="font-semibold text-primary">{finalAmount} EGP</span>
                </div>
                {paymentMethod && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">طريقة الدفع:</span>
                    <span className="font-semibold text-foreground">
                      {paymentMethods.find(m => m.id === paymentMethod)?.name}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Next Button */}
        <Button 
          className="w-full goldearn-button"
          onClick={handleNext}
          disabled={!isFormValid}
        >
          التالي - تأكيد الدفع
        </Button>

        {/* Info */}
        <Card className="goldearn-card">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">معلومات مهمة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• الحد الأدنى للشحن هو 50 جنيه</li>
              <li>• سيتم إضافة الرصيد فور تأكيد الدفع</li>
              <li>• تأكد من صحة المبلغ قبل المتابعة</li>
              <li>• في حالة وجود مشكلة، تواصل مع الدعم الفني</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TopUpPage

