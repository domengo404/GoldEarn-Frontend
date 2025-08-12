import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Upload, Phone, Building, Copy, CheckCircle } from 'lucide-react'

const TopUpPaymentPage = () => {
  const [receiptFile, setReceiptFile] = useState(null)
  const [copied, setCopied] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  const { amount, paymentMethod } = location.state || { amount: 0, paymentMethod: '' }

  // Mock payment details
  const paymentDetails = {
    vodafone_cash: {
      name: 'فودافون كاش',
      number: '01234567890',
      accountName: 'GoldEarn Ltd'
    },
    bank_transfer: {
      name: 'حوالة بنكية',
      bankName: 'البنك الأهلي المصري',
      accountNumber: '1234567890123456',
      accountName: 'GoldEarn Ltd'
    }
  }

  const currentPayment = paymentDetails[paymentMethod]

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setReceiptFile(file)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleConfirmPayment = () => {
    if (receiptFile) {
      navigate('/topup-confirmation', { 
        state: { 
          amount, 
          paymentMethod,
          receiptFile: receiptFile.name
        } 
      })
    }
  }

  if (!amount || !paymentMethod) {
    navigate('/topup')
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 flex items-center border-b border-border">
        <button 
          onClick={() => navigate('/topup')}
          className="text-foreground ml-3"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-foreground">تأكيد الدفع</h1>
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
            <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center font-bold text-sm">
              2
            </div>
            <span className="text-sm text-primary font-medium mr-2">الدفع</span>
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
        {/* Payment Summary */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">ملخص العملية</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">المبلغ:</span>
                <span className="font-bold text-primary">{amount} EGP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">طريقة الدفع:</span>
                <span className="font-semibold text-foreground">{currentPayment?.name}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Instructions */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              {paymentMethod === 'vodafone_cash' ? (
                <Phone className="w-5 h-5 ml-2 text-red-500" />
              ) : (
                <Building className="w-5 h-5 ml-2 text-blue-500" />
              )}
              تفاصيل الدفع
            </h3>

            <div className="space-y-4">
              {paymentMethod === 'vodafone_cash' ? (
                <>
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">رقم فودافون كاش:</span>
                      <button 
                        onClick={() => copyToClipboard(currentPayment.number)}
                        className="text-primary text-sm flex items-center space-x-1 space-x-reverse"
                      >
                        {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? 'تم النسخ' : 'نسخ'}</span>
                      </button>
                    </div>
                    <div className="text-lg font-bold text-foreground">{currentPayment.number}</div>
                    <div className="text-sm text-muted-foreground mt-1">باسم: {currentPayment.accountName}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 bg-secondary rounded-lg space-y-3">
                    <div>
                      <span className="text-sm text-muted-foreground">اسم البنك:</span>
                      <div className="font-semibold text-foreground">{currentPayment.bankName}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-muted-foreground">رقم الحساب:</span>
                        <div className="font-bold text-foreground">{currentPayment.accountNumber}</div>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(currentPayment.accountNumber)}
                        className="text-primary text-sm flex items-center space-x-1 space-x-reverse"
                      >
                        {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? 'تم النسخ' : 'نسخ'}</span>
                      </button>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">اسم صاحب الحساب:</span>
                      <div className="font-semibold text-foreground">{currentPayment.accountName}</div>
                    </div>
                  </div>
                </>
              )}

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 mb-2">تعليمات مهمة:</h4>
                <ul className="text-sm text-yellow-300 space-y-1">
                  <li>• قم بتحويل المبلغ المطلوب بالضبط: {amount} EGP</li>
                  <li>• احتفظ بإيصال التحويل</li>
                  <li>• قم برفع صورة واضحة للإيصال أدناه</li>
                  <li>• سيتم إضافة الرصيد خلال 24 ساعة من التأكيد</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Receipt Upload */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <Upload className="w-5 h-5 ml-2 text-primary" />
              رفع إيصال الدفع
            </h3>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <div className="space-y-2">
                  <p className="text-foreground font-medium">اختر صورة الإيصال</p>
                  <p className="text-sm text-muted-foreground">PNG, JPG أو PDF (حد أقصى 5MB)</p>
                </div>
                <Input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                  className="mt-4"
                />
              </div>

              {receiptFile && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-green-400 font-medium">تم رفع الملف بنجاح</p>
                      <p className="text-sm text-green-300">{receiptFile.name}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Confirm Button */}
        <Button 
          className="w-full goldearn-button"
          onClick={handleConfirmPayment}
          disabled={!receiptFile}
        >
          تأكيد الدفع
        </Button>

        {/* Help */}
        <Card className="goldearn-card">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">تحتاج مساعدة؟</h4>
            <p className="text-sm text-muted-foreground">
              إذا واجهت أي مشكلة في عملية الدفع، تواصل مع فريق الدعم الفني على:
              <br />
              <span className="text-primary font-medium">support@goldearn.com</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TopUpPaymentPage

