<template>
  <div>
    <img src="/about/bg.jpg" class="bg_about"/>
    <div class="content">
      <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="/about">企业荣誉</a></a-breadcrumb-item>
      </a-breadcrumb>
      <div class="title">{{title}}</div>
      <div class="honors-container">
    <!-- CRAA 认证卡片 -->
      <div 
        class="honor-card craa-card"
        @mouseenter="startGlow(0)"
        @mouseleave="stopGlow"
        :style="{ '--glow-color': glowIndex === 0 ? '#00e676' : '#00bcd4' }"
      >
        <div class="cert-badge">
          <div class="inner-circle">
            <i class="el-icon-medal"></i>
          </div>
        </div>
        <div class="honor-content">
          <h3 class="honor-title">
            <span class="highlight">CRAA认证</span>
            <span class="subtitle">中国制冷空调工业协会</span>
          </h3>
          <div class="specs-grid">
            <div class="spec-item">
              <div class="spec-value">A级</div>
              <div class="spec-label">耐腐蚀检测</div>
            </div>
            <div class="spec-item">
              <div class="spec-value">+30%</div>
              <div class="spec-label">能效提升</div>
            </div>
            <div class="spec-item">
              <div class="spec-value">GB/T 7190.1-2018</div>
              <div class="spec-label">执行标准</div>
            </div>
          </div>
          <div class="animated-wave"></div>
        </div>
        <div class="corner-ribbon">行业标杆</div>
      </div>

      <!-- ISO 认证卡片 -->
      <div 
        class="honor-card iso-card"
        @mouseenter="startGlow(1)"
        @mouseleave="stopGlow"
        :style="{ '--glow-color': glowIndex === 1 ? '#ff9100' : '#ff5722' }"
      >
        <div class="cert-stack">
          <div class="cert cert-1" v-for="n in 3" :key="n"></div>
        </div>
        <div class="honor-content">
          <h3 class="honor-title">
            <span class="highlight">ISO三体系认证</span>
            <span class="subtitle">国际标准化组织</span>
          </h3>
          <div class="progress-bars">
            <div class="progress-item">
              <div class="progress-track">
                <div 
                  class="progress-fill"
                  :style="{ width: '99.2%' }"
                  data-value="99.2%"
                ></div>
              </div>
              <span>产品合格率</span>
            </div>
            <div class="progress-item">
              <div class="progress-track">
                <div 
                  class="progress-fill"
                  :style="{ width: '92%' }"
                  data-value="92%"
                ></div>
              </div>
              <span>废弃物利用率</span>
            </div>
            <div class="progress-item">
              <div class="progress-track">
                <div 
                  class="progress-fill"
                  :style="{ width: '100%' }"
                  data-value="8年"
                ></div>
              </div>
              <span>安全生产记录</span>
            </div>
          </div>
          <div class="standards">
            <span v-for="(std, idx) in isoStandards" :key="idx" class="standard-tag">
              {{ std }}
            </span>
          </div>
        </div>
        <div class="particles" v-if="glowIndex === 1">
          <div class="particle" v-for="n in 15" :key="'p'+n"></div>
        </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      title: '资质荣誉',
      glowIndex: null,
      isoStandards: [
        'ISO 9001:2015', 
        'ISO 14001:2015',
        'ISO 45001:2018'
      ]
    }
  },
  methods: {
    startGlow(index) {
      // this.glowIndex = index
    },
    stopGlow() {
      // this.glowIndex = null
    }
  }
}
</script>
<style lang="stylus" scoped>
.bg_about
  width 100%
  height 100%

.content
  max-width 1440px
  width 100%
  margin 0 auto
  padding 10px 20px

.title
  text-align center
  font-size 24px
  font-weight bold 

.content
  font-size 16px

.company_about
  position relative
  left 50%
  transform translateX(-50%)
  background-size 100% 100%

  .honors-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.honor-card {
  position: relative;
  border-radius: 12px;
  padding: 30px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.craa-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #e4f2fd 100%);
  border-left: 5px solid #00bcd4;
}

.iso-card {
  background: linear-gradient(135deg, #fff8f1 0%, #ffecdf 100%);
  border-left: 5px solid #ff5722;
}

.honor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.honor-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at var(--mouse-x) var(--mouse-y), 
    var(--glow-color) 0%, 
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.3s;
}

.honor-card:hover::before {
  opacity: 0.15;
}

.cert-badge {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background: #00bcd4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(0, 188, 212, 0.3);
}

.inner-circle {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #00bcd4;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.honor-title {
  margin-bottom: 25px;
  position: relative;
  z-index: 2;
}

.highlight {
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 14px;
  color: #666;
  letter-spacing: 1px;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 25px 0;
}

.spec-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.spec-item:hover {
  transform: translateY(-3px);
}

.spec-value {
  font-size: 22px;
  font-weight: bold;
  color: #00bcd4;
  margin-bottom: 5px;
}

.spec-label {
  font-size: 12px;
  color: #666;
}

.animated-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="%2300bcd4" opacity=".25"/></svg>');
  background-size: cover;
  animation: wave 12s linear infinite;
}

@keyframes wave {
  0% { background-position-x: 0; }
  100% { background-position-x: 1200px; }
}

/* ISO 卡片特有样式 */
.cert-stack {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 80px;
}

.cert {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #ff5722;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.7);
}

.cert-1 { transform: rotate(-3deg); }
.cert-2 { transform: rotate(3deg) translateY(5px); }
.cert-3 { transform: rotate(-1deg) translateY(10px); }

.progress-bars {
  margin: 30px 0;
}

.progress-item {
  margin-bottom: 15px;
}

.progress-track {
  height: 8px;
  background: #ffe0b2;
  border-radius: 4px;
  margin-bottom: 5px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff9800, #ff5722);
  border-radius: 4px;
  position: relative;
  transition: width 1.5s ease-out;
}

.progress-fill::after {
  content: attr(data-value);
  position: absolute;
  right: 5px;
  top: -20px;
  font-size: 12px;
  color: #ff5722;
  font-weight: bold;
}

.standard-tag {
  display: inline-block;
  background: #ff5722;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: #ff9100;
  border-radius: 50%;
  animation: float-up 4s infinite;
}

@keyframes float-up {
  0% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .honors-container {
    grid-template-columns: 1fr;
  }
  
  .specs-grid {
    grid-template-columns: 1fr;
  }
}
</style>