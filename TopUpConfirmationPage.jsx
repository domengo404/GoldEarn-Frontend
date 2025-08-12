import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Clock, Home, FileText } from 'lucide-react'

const TopUpConfirmationPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const { amount, paymentMethod, receiptFile } = location.state || {}

  if (!amount || !paymentMethod) {
    navigate('/topup')
    return null
  }

  const paymentMethodNames = {
    vodafone_cash: 'فودافون كاش',
    bank_transfer: 'حوالة بنكية'
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 flex items-center border-b border-border">
        <h1 className="text-xl font-bold text-foreground">تأكيد العملية</h1>
      </div>

      {/* Progress Steps */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-center space-x-4 space-x-reverse">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
              ✓
            </div>
            <span className="text-sm text-green-500 font-medium mr-2">المبلغ</span>
          </div>
          <div className="w-12 h-0.5 bg-green-500"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
              ✓
            </div>
            <span className="text-sm text-green-500 font-medium mr-2">الدفع</span>
          </div>
          <div className="w-12 h-0.5 bg-green-500"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center font-bold text-sm">
              3
            </div>
            <span className="text-sm text-primary font-medium mr-2">التأكيد</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Success Message */}
        <Card className="goldearn-card">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-4">تم إرسال طلبك بنجاح!</h2>
            <p className="text-muted-foreground mb-6">
              شكرًا لك! تم استلام طلب شحن الرصيد وسيتم مراجعته قريبًا
            </p>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 space-x-reverse mb-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">في انتظار الموافقة</span>
              </div>
              <p className="text-sm text-yellow-300">
                سيتم مراجعة طلبك وإضافة الرصيد خلال 24 ساعة
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Details */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">تفاصيل العملية</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">رقم العملية:</span>
                <span className="font-bold text-primary">#TOP{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">المبلغ:</span>
                <span className="font-bold text-foreground">{amount} EGP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">طريقة الدفع:</span>
                <span className="font-semibold text-foreground">{paymentMethodNames[paymentMethod]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">التاريخ:</span>
                <span className="font-semibold text-foreground">{new Date().toLocaleDateString('ar-EG')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">الوقت:</span>
                <span className="font-semibold text-foreground">{new Date().toLocaleTimeString('ar-EG')}</span>
              </div>
              {receiptFile && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الإيصال:</span>
                  <span className="font-semibold text-green-400">تم الرفع ✓</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">الخطوات التالية</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium text-foreground">مراجعة الطلب</p>
                  <p className="text-sm text-muted-foreground">سيقوم فريقنا بمراجعة إيصال الدفع</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium text-foreground">تأكيد الدفع</p>
                  <p className="text-sm text-muted-foreground">سيتم تأكيد استلام المبلغ</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium text-foreground">إضافة الرصيد</p>
                  <p className="text-sm text-muted-foreground">سيتم إضافة الرصيد إلى حسابك فورًا</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            className="w-full goldearn-button"
            onClick={() => navigate('/home')}
          >
            <Home className="w-5 h-5 ml-2" />
            العودة إلى الرئيسية
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate('/financial-records')}
          >
            <FileText className="w-5 h-5 ml-2" />
            عرض السجلات المالية
          </Button>
        </div>

        {/* Support Info */}
        <Card className="goldearn-card">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">تحتاج مساعدة؟</h4>
            <p className="text-sm text-muted-foreground">
              إذا لم يتم إضافة الرصيد خلال 24 ساعة، أو إذا كان لديك أي استفسار، 
              تواصل معنا على:
              <br />
              <span className="text-primary font-medium">support@goldearn.com</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TopUpConfirmationPage

