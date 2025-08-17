import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, Eye, Clock, Target } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { GlassPanel, GlassContainer, GlassMetric, GlassFloating } from '../components/GlassCard';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalRevenue: 124750,
    activeUsers: 2847,
    conversionRate: 3.24,
    growth: 12.5
  });

  const [timeRange, setTimeRange] = useState('7d');

  const analyticsData = [
    { label: 'Page Views', value: '18.2K', change: '+8.2%', trend: 'up' },
    { label: 'Session Duration', value: '4m 32s', change: '+12.1%', trend: 'up' },
    { label: 'Bounce Rate', value: '32.4%', change: '-5.3%', trend: 'down' },
    { label: 'Goal Completion', value: '67.8%', change: '+15.7%', trend: 'up' }
  ];

  const recentActivity = [
    { action: 'New user registration', time: '2 minutes ago', icon: Users },
    { action: 'Payment processed', time: '5 minutes ago', icon: DollarSign },
    { action: 'Goal completed', time: '12 minutes ago', icon: Target },
    { action: 'Page view milestone', time: '18 minutes ago', icon: Eye }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        totalRevenue: prev.totalRevenue + Math.floor(Math.random() * 1000) - 500
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-thin text-white mb-4 tracking-wide">
              Dashboard
            </h1>
            <p className="text-white/60 text-lg font-light">
              Real-time analytics and performance metrics
            </p>
          </motion.div>

          {/* Time Range Selector */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <GlassPanel className="inline-flex p-1">
              {['24h', '7d', '30d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    timeRange === range
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {range}
                </button>
              ))}
            </GlassPanel>
          </motion.div>

          {/* Main Metrics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <GlassMetric
              title="Total Revenue"
              value={`$${metrics.totalRevenue.toLocaleString()}`}
              icon={DollarSign}
              trend="up"
              change="+12.5%"
            />
            <GlassMetric
              title="Active Users"
              value={metrics.activeUsers.toLocaleString()}
              icon={Users}
              trend="up"
              change="+8.3%"
            />
            <GlassMetric
              title="Conversion Rate"
              value={`${metrics.conversionRate}%`}
              icon={Target}
              trend="up"
              change="+2.1%"
            />
            <GlassMetric
              title="Growth Rate"
              value={`${metrics.growth}%`}
              icon={TrendingUp}
              trend="up"
              change="+5.7%"
            />
          </motion.div>

          {/* Analytics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Performance Analytics */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <GlassContainer>
                <div className="p-8">
                  <h3 className="text-2xl font-light text-white mb-8 text-center">
                    Performance Analytics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {analyticsData.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white/70 text-sm font-medium">
                            {item.label}
                          </span>
                          {item.trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-white/60" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-white/60" />
                          )}
                        </div>
                        <div className="text-2xl font-light text-white mb-2">
                          {item.value}
                        </div>
                        <div className={`text-sm font-medium ${
                          item.trend === 'up' ? 'text-white/80' : 'text-white/60'
                        }`}>
                          {item.change}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlassContainer>
            </motion.div>

            {/* Recent Activity */}
            <motion.div variants={itemVariants}>
              <GlassContainer>
                <div className="p-8">
                  <h3 className="text-xl font-light text-white mb-6 text-center">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
                      >
                        <div className="p-2 rounded-lg bg-white/10">
                          <activity.icon className="w-4 h-4 text-white/70" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white/90 text-sm font-medium mb-1">
                            {activity.action}
                          </div>
                          <div className="text-white/50 text-xs flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {activity.time}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlassContainer>
            </motion.div>
          </div>

          {/* Status Indicators */}
          <motion.div variants={itemVariants} className="mt-12">
            <GlassContainer>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-8 text-center">
                  System Status
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <Activity className="w-8 h-8 text-white/80" />
                    </div>
                    <div className="text-white/90 font-medium mb-2">API Status</div>
                    <div className="text-white/60 text-sm">Operational</div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-3">
                      <div className="w-full h-full bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white/80" />
                    </div>
                    <div className="text-white/90 font-medium mb-2">Monitoring</div>
                    <div className="text-white/60 text-sm">Active</div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-3">
                      <div className="w-4/5 h-full bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <Target className="w-8 h-8 text-white/80" />
                    </div>
                    <div className="text-white/90 font-medium mb-2">Performance</div>
                    <div className="text-white/60 text-sm">Optimal</div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-3">
                      <div className="w-5/6 h-full bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassContainer>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <GlassFloating className="top-20 left-10" delay={0} />
      <GlassFloating className="top-40 right-20" delay={1} />
      <GlassFloating className="bottom-32 left-1/4" delay={2} />
      <GlassFloating className="bottom-20 right-10" delay={3} />
    </div>
  );
};

export default Dashboard;