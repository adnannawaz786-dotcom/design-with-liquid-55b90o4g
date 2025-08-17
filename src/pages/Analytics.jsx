import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Activity, Users, DollarSign, Target } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { GlassContainer, GlassPanel, GlassMetric, GlassFloating } from '../components/GlassCard';

const Analytics = () => {
  const analyticsData = {
    totalRevenue: '$124,500',
    revenueChange: '+12.5%',
    totalUsers: '8,429',
    userChange: '+8.2%',
    conversionRate: '3.2%',
    conversionChange: '+0.4%',
    avgOrderValue: '$147',
    aovChange: '-2.1%'
  };

  const chartData = [
    { month: 'Jan', revenue: 45000, users: 2400 },
    { month: 'Feb', revenue: 52000, users: 2800 },
    { month: 'Mar', revenue: 48000, users: 2600 },
    { month: 'Apr', revenue: 61000, users: 3200 },
    { month: 'May', revenue: 55000, users: 2900 },
    { month: 'Jun', revenue: 67000, users: 3400 }
  ];

  const topMetrics = [
    { label: 'Page Views', value: '1.2M', change: '+15.3%', trending: 'up' },
    { label: 'Bounce Rate', value: '42.1%', change: '-5.2%', trending: 'down' },
    { label: 'Session Duration', value: '4m 32s', change: '+12.8%', trending: 'up' },
    { label: 'Goal Completions', value: '2,847', change: '+23.1%', trending: 'up' }
  ];

  const MetricCard = ({ icon: Icon, label, value, change, trending }) => (
    <GlassPanel className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Icon className="h-6 w-6 text-white/60" />
        {trending === 'up' ? (
          <TrendingUp className="h-4 w-4 text-white/80" />
        ) : (
          <TrendingDown className="h-4 w-4 text-white/60" />
        )}
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-sm text-white/60">{label}</p>
        <p className={`text-xs ${trending === 'up' ? 'text-white/80' : 'text-white/50'}`}>
          {change} from last month
        </p>
      </div>
    </GlassPanel>
  );

  const ChartBar = ({ height, delay }) => (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: `${height}%` }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className="bg-gradient-to-t from-white/20 to-white/40 backdrop-blur-sm border border-white/10 rounded-t-sm"
    />
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Analytics Overview</h1>
          <p className="text-white/60 text-lg">Real-time insights and performance metrics</p>
        </motion.div>

        <GlassContainer className="space-y-8">
          {/* Main Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <MetricCard
              icon={DollarSign}
              label="Total Revenue"
              value={analyticsData.totalRevenue}
              change={analyticsData.revenueChange}
              trending="up"
            />
            <MetricCard
              icon={Users}
              label="Total Users"
              value={analyticsData.totalUsers}
              change={analyticsData.userChange}
              trending="up"
            />
            <MetricCard
              icon={Target}
              label="Conversion Rate"
              value={analyticsData.conversionRate}
              change={analyticsData.conversionChange}
              trending="up"
            />
            <MetricCard
              icon={Activity}
              label="Avg Order Value"
              value={analyticsData.avgOrderValue}
              change={analyticsData.aovChange}
              trending="down"
            />
          </motion.div>

          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <GlassPanel className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Revenue Trend</h3>
                <BarChart3 className="h-5 w-5 text-white/60" />
              </div>
              <div className="h-48 flex items-end justify-between space-x-2">
                {chartData.map((data, index) => (
                  <div key={data.month} className="flex-1 flex flex-col items-center space-y-2">
                    <ChartBar 
                      height={(data.revenue / 70000) * 100} 
                      delay={index * 0.1} 
                    />
                    <span className="text-xs text-white/60">{data.month}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">User Growth</h3>
                <PieChart className="h-5 w-5 text-white/60" />
              </div>
              <div className="h-48 flex items-end justify-between space-x-2">
                {chartData.map((data, index) => (
                  <div key={data.month} className="flex-1 flex flex-col items-center space-y-2">
                    <ChartBar 
                      height={(data.users / 4000) * 100} 
                      delay={index * 0.1 + 0.3} 
                    />
                    <span className="text-xs text-white/60">{data.month}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Top Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {topMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <GlassMetric
                  label={metric.label}
                  value={metric.value}
                  change={metric.change}
                  trending={metric.trending}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center"
          >
            <GlassFloating className="text-center p-8 max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Performance Summary</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Your analytics show strong growth across all key metrics. Revenue is up 12.5% 
                with user acquisition growing at 8.2%. The conversion rate improvement of 0.4% 
                indicates better user engagement and optimized funnel performance.
              </p>
              <div className="mt-6 flex justify-center space-x-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">94.2%</p>
                  <p className="text-sm text-white/60">Uptime</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">1.8s</p>
                  <p className="text-sm text-white/60">Load Time</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">98.1%</p>
                  <p className="text-sm text-white/60">Satisfaction</p>
                </div>
              </div>
            </GlassFloating>
          </motion.div>
        </GlassContainer>
      </div>
    </div>
  );
};

export default Analytics;