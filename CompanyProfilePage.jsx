import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Building, Mail, Users, Shield, Award, Globe } from 'lucide-react'

const CompanyProfilePage = () => {
  const navigate = useNavigate()

  const executives = [
    { position: 'CEO', name: 'أحمد محمد علي' },
    { position: 'CTO', name: 'سارة أحمد حسن' },
    { position: 'CFO', name: 'محمد عبدالله إبراهيم' }
  ]

  const partners = [
    'شركة التكنولوجيا المتقدمة',
    'مجموعة الاستثمارات الذهبية',
    'شركة الحلول المالية',
    'مؤسسة التطوير التقني'
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
        <h1 className="text-xl font-bold text-foreground">ملف الشركة</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Company Header */}
        <Card className="goldearn-card">
          <CardContent className="p-6 text-center">
            <div className="w-20 h-20 rounded-full goldearn-gradient flex items-center justify-center mx-auto mb-4">
              <Building className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">GoldEarn Ltd.</h2>
            <p className="text-muted-foreground">
              شركة رائدة في مجال الاستثمار الرقمي والأرباح المضمونة
            </p>
          </CardContent>
        </Card>

        {/* About Us */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <Globe className="w-5 h-5 ml-2 text-primary" />
              من نحن
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              تأسست شركة GoldEarn في عام 2020 كشركة متخصصة في تقديم حلول الاستثمار الرقمي المبتكرة. 
              نهدف إلى توفير فرص استثمارية آمنة ومربحة لعملائنا من خلال منصة تقنية متطورة تضمن 
              الشفافية والأمان في جميع المعاملات. نحن ملتزمون بتقديم أفضل الخدمات وأعلى العوائد 
              لمستثمرينا الكرام.
            </p>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <Mail className="w-5 h-5 ml-2 text-primary" />
              معلومات التواصل
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">البريد الإلكتروني:</span>
                <span className="text-foreground font-medium">support@goldearn.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">خدمة العملاء:</span>
                <span className="text-foreground font-medium">24/7</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Activity */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <Award className="w-5 h-5 ml-2 text-primary" />
              النشاط الرئيسي
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• تقديم خدمات الاستثمار الرقمي</li>
              <li>• إدارة المحافظ الاستثمارية</li>
              <li>• تطوير منصات التداول الآمنة</li>
              <li>• تقديم الاستشارات المالية</li>
              <li>• خدمات التحليل المالي والتقني</li>
            </ul>
          </CardContent>
        </Card>

        {/* Management Structure */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <Users className="w-5 h-5 ml-2 text-primary" />
              الهيكل الإداري
            </h3>
            <div className="space-y-3">
              {executives.map((exec, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="text-foreground font-medium">{exec.name}</span>
                  <span className="text-primary font-semibold">{exec.position}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strategic Partners */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <Shield className="w-5 h-5 ml-2 text-primary" />
              الشركاء الاستراتيجيون
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {partners.map((partner, index) => (
                <div key={index} className="p-3 bg-secondary rounded-lg text-center">
                  <span className="text-foreground font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Legal Notice */}
        <Card className="goldearn-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <Shield className="w-5 h-5 ml-2 text-yellow-400" />
              تنويه قانوني
            </h3>
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-yellow-400">تحذير:</strong> جميع الاستثمارات تنطوي على مخاطر. 
                الأداء السابق لا يضمن النتائج المستقبلية. يرجى قراءة جميع الشروط والأحكام بعناية قبل الاستثمار. 
                هذه المنصة مخصصة للأغراض التعليمية والتوعوية فقط. استشر مستشارًا ماليًا مؤهلاً قبل اتخاذ أي قرارات استثمارية.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CompanyProfilePage

