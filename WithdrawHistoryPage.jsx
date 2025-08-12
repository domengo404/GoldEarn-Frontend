import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

const WithdrawHistoryPage = () => {
  const navigate = useNavigate()

  // Mock withdrawal history data
  const withdrawalHistory = [
    {
      id: 'WD001',
      amount: 100,
      status: 'pending',
      date: '2025-01-04',
      time: '14:30',
      method: 'فودافون كاش'
    },
    {
      id: 'WD002',
      amount: 50,
      status: 'completed',
      date: '2025-01-03',
      time: '10:15',
      method: 'فودافون كاش'
    },
    {
      id: 'WD003',
      amount: 75,
      status: 'rejected',
      date: '2025-01-02',
      time: '16:45',
      method: 'حوالة بنكية',
      reason: 'بيانات غير صحيحة'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />
      case 'completed':
        return <CheckCircle className="w-4 h-4" />
      case 'rejected':
        return <XCircle className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'rejected':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'pending':
        return 'قيد المراجعة'
      case 'completed':
        return 'مكتمل'
      case 'rejected':
        return 'مرفوض'
      default:
        return 'غير معروف'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 flex items-center border-b border-border">
        <button 
          onClick={() => navigate('/withdraw')}
          className="text-foreground ml-3"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-foreground">سجل السحب</h1>
      </div>

      <div className="p-4">
        {withdrawalHistory.length === 0 ? (
          <Card className="goldearn-card">
            <CardContent className="p-8 text-center">
              <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">لا توجد عمليات سحب</h3>
              <p className="text-muted-foreground">
                لم تقم بأي عمليات سحب حتى الآن
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-lg font-bold text-foreground mb-2">سجل عمليات السحب</h2>
              <p className="text-muted-foreground">
                تتبع جميع طلبات السحب الخاصة بك
              </p>
            </div>

            {withdrawalHistory.map((withdrawal) => (
              <Card key={withdrawal.id} className="goldearn-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className={`p-2 rounded-full ${getStatusColor(withdrawal.status)}`}>
                        {getStatusIcon(withdrawal.status)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">طلب سحب #{withdrawal.id}</h4>
                        <p className="text-sm text-muted-foreground">
                          {withdrawal.date} - {withdrawal.time}
                        </p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(withdrawal.status)}>
                      {getStatusText(withdrawal.status)}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <span className="text-sm text-muted-foreground">المبلغ:</span>
                      <div className="font-bold text-primary">{withdrawal.amount} EGP</div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">طريقة السحب:</span>
                      <div className="font-medium text-foreground">{withdrawal.method}</div>
                    </div>
                  </div>

                  {withdrawal.reason && (
                    <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <XCircle className="w-4 h-4 text-red-400" />
                        <span className="text-sm font-medium text-red-400">سبب الرفض:</span>
                      </div>
                      <p className="text-sm text-red-300 mt-1">{withdrawal.reason}</p>
                    </div>
                  )}

                  {withdrawal.status === 'pending' && (
                    <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-yellow-400">
                          طلبك قيد المراجعة، سيتم الرد خلال 24-48 ساعة
                        </span>
                      </div>
                    </div>
                  )}

                  {withdrawal.status === 'completed' && (
                    <div className="mt-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400">
                          تم تحويل المبلغ بنجاح إلى محفظتك
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Summary Card */}
        <Card className="goldearn-card mt-6">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">ملخص العمليات</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-primary">
                  {withdrawalHistory.filter(w => w.status === 'completed').length}
                </div>
                <div className="text-xs text-muted-foreground">مكتملة</div>
              </div>
              <div>
                <div className="text-lg font-bold text-yellow-400">
                  {withdrawalHistory.filter(w => w.status === 'pending').length}
                </div>
                <div className="text-xs text-muted-foreground">قيد المراجعة</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-400">
                  {withdrawalHistory.filter(w => w.status === 'rejected').length}
                </div>
                <div className="text-xs text-muted-foreground">مرفوضة</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default WithdrawHistoryPage

