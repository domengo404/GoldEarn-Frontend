import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CreditCard, Banknote, Users, CheckSquare, Clock, CheckCircle, XCircle } from 'lucide-react'

const FinancialRecordsPage = () => {
  const [selectedTab, setSelectedTab] = useState('الكل')
  const navigate = useNavigate()

  const tabs = ['الكل', 'إعادة الشحن', 'السحب', 'دعوة صديق', 'إتمام المهام']

  // Mock financial records data
  const records = [
    {
      id: 'TXN001',
      type: 'task_completion',
      title: 'إتمام مهمة يومية',
      amount: '+50 EGP',
      status: 'completed',
      date: '2025-01-04',
      time: '14:30',
      description: 'مكافأة إتمام استبيان يومي'
    },
    {
      id: 'TXN002',
      type: 'topup',
      title: 'شحن الرصيد',
      amount: '+100 EGP',
      status: 'pending',
      date: '2025-01-04',
      time: '12:15',
      description: 'طلب شحن رصيد عبر فودافون كاش'
    },
    {
      id: 'TXN003',
      type: 'withdrawal',
      title: 'سحب أرباح',
      amount: '-75 EGP',
      status: 'completed',
      date: '2025-01-03',
      time: '16:45',
      description: 'سحب أرباح إلى المحفظة'
    },
    {
      id: 'TXN004',
      type: 'referral',
      title: 'عمولة إحالة',
      amount: '+25 EGP',
      status: 'completed',
      date: '2025-01-03',
      time: '10:20',
      description: 'عمولة من إحالة صديق - المستوى الأول'
    },
    {
      id: 'TXN005',
      type: 'withdrawal',
      title: 'سحب أرباح',
      amount: '-50 EGP',
      status: 'rejected',
      date: '2025-01-02',
      time: '09:30',
      description: 'طلب سحب مرفوض - بيانات غير صحيحة'
    }
  ]

  const getTypeIcon = (type) => {
    switch (type) {
      case 'topup':
        return <CreditCard className="w-5 h-5" />
      case 'withdrawal':
        return <Banknote className="w-5 h-5" />
      case 'referral':
        return <Users className="w-5 h-5" />
      case 'task_completion':
        return <CheckSquare className="w-5 h-5" />
      default:
        return <Clock className="w-5 h-5" />
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'topup':
        return 'text-blue-400'
      case 'withdrawal':
        return 'text-red-400'
      case 'referral':
        return 'text-purple-400'
      case 'task_completion':
        return 'text-green-400'
      default:
        return 'text-muted-foreground'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-400" />
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-400" />
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'مكتمل'
      case 'pending':
        return 'قيد المراجعة'
      case 'rejected':
        return 'مرفوض'
      default:
        return 'غير معروف'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'rejected':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const filteredRecords = selectedTab === 'الكل' 
    ? records 
    : records.filter(record => {
        switch (selectedTab) {
          case 'إعادة الشحن':
            return record.type === 'topup'
          case 'السحب':
            return record.type === 'withdrawal'
          case 'دعوة صديق':
            return record.type === 'referral'
          case 'إتمام المهام':
            return record.type === 'task_completion'
          default:
            return true
        }
      })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card p-4 flex items-center border-b border-border">
        <button 
          onClick={() => navigate('/profile')}
          className="text-foreground ml-3"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-foreground">السجلات المالية</h1>
      </div>

      <div className="p-4">
        {/* Tabs */}
        <div className="flex space-x-2 space-x-reverse overflow-x-auto mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedTab === tab
                  ? 'bg-primary text-black'
                  : 'bg-secondary text-foreground hover:bg-primary/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Records List */}
        {filteredRecords.length === 0 ? (
          <Card className="goldearn-card">
            <CardContent className="p-8 text-center">
              <Clock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">لا توجد سجلات</h3>
              <p className="text-muted-foreground">
                لا توجد معاملات مالية في هذه الفئة حتى الآن
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredRecords.map((record) => (
              <Card key={record.id} className="goldearn-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className={`p-2 rounded-full bg-secondary ${getTypeColor(record.type)}`}>
                        {getTypeIcon(record.type)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{record.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {record.date} - {record.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className={`text-lg font-bold ${
                        record.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {record.amount}
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        {getStatusIcon(record.status)}
                        <Badge className={getStatusColor(record.status)}>
                          {getStatusText(record.status)}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {record.description}
                  </div>

                  {record.status === 'pending' && (
                    <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-yellow-400">
                          المعاملة قيد المراجعة، سيتم التحديث قريبًا
                        </span>
                      </div>
                    </div>
                  )}

                  {record.status === 'rejected' && (
                    <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <XCircle className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-400">
                          تم رفض المعاملة، تواصل مع الدعم للمزيد من التفاصيل
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Summary */}
        <Card className="goldearn-card mt-6">
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">ملخص المعاملات</h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-green-400">
                  {records.filter(r => r.status === 'completed' && r.amount.startsWith('+')).length}
                </div>
                <div className="text-xs text-muted-foreground">إيداعات</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-400">
                  {records.filter(r => r.status === 'completed' && r.amount.startsWith('-')).length}
                </div>
                <div className="text-xs text-muted-foreground">سحوبات</div>
              </div>
              <div>
                <div className="text-lg font-bold text-yellow-400">
                  {records.filter(r => r.status === 'pending').length}
                </div>
                <div className="text-xs text-muted-foreground">قيد المراجعة</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-400">
                  {records.filter(r => r.status === 'rejected').length}
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

export default FinancialRecordsPage

