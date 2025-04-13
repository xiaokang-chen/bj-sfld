<template>
  <div>
    <img src="/about/bg.jpg" class="bg_about"/>
    <div class="content">
      <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="/about">客户案例</a></a-breadcrumb-item>
      </a-breadcrumb>
      <div class="title">{{title}}</div>
      <div class="success-cases">
      <div class="case-container">
        <!-- 案例1 -->
        <div class="case-card" @mouseenter="hoverCase(0)" @mouseleave="resetHover">
          <div class="case-header">
            <h3>{{ cases[0].title }}</h3>
            <div class="highlight-tag" v-if="hoverIndex === 0">标杆案例</div>
          </div>
          <div class="case-content">
            <p><strong>项目背景：</strong>{{ cases[0].background }}</p>
            <p><strong>解决方案：</strong>{{ cases[0].solution }}</p>
            <div class="results">
              <h4>项目成果：</h4>
              <ul>
                <li v-for="(result, index) in cases[0].results" :key="'case1-'+index">
                  <i class="el-icon-success"></i> {{ result }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br/>

        <!-- 案例2 -->
        <div class="case-card" @mouseenter="hoverCase(1)" @mouseleave="resetHover">
          <div class="case-header">
            <h3>{{ cases[1].title }}</h3>
            <div class="highlight-tag" v-if="hoverIndex === 1">技术突破</div>
          </div>
          <div class="case-content">
            <p><strong>项目挑战：</strong>{{ cases[1].challenge }}</p>
            <div class="tech-highlights">
              <h4>技术突破：</h4>
              <ul>
                <li v-for="(tech, index) in cases[1].technologies" :key="'case2-'+index">
                  <i class="el-icon-odometer"></i> {{ tech }}
                </li>
              </ul>
            </div>
            <p class="client-feedback">"{{ cases[1].feedback }}"</p>
          </div>
        </div>
        <br/>

        <!-- 案例3 -->
        <div class="case-card" @mouseenter="hoverCase(2)" @mouseleave="resetHover">
          <div class="case-header">
            <h3>{{ cases[2].title }}</h3>
            <div class="highlight-tag" v-if="hoverIndex === 2">紧急响应</div>
          </div>
          <div class="case-content">
            <p><strong>紧急需求：</strong>{{ cases[2].emergency }}</p>
            <div class="response-timeline">
              <h4>快速响应：</h4>
              <ul>
                <li v-for="(step, index) in cases[2].responseSteps" :key="'case3-'+index">
                  <span class="timeline-badge">{{ index + 1 }}</span>
                  {{ step }}
                </li>
              </ul>
            </div>
            <p class="value-statement"><i class="el-icon-data-line"></i> {{ cases[2].value }}</p>
          </div>
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
      title: '客户成功案例',
      // hoverIndex: null,
      cases: [
        {
          title: "大型食品厂制冷系统改造",
          background: "某河北食品企业原有制冷管道腐蚀严重，年维护成本超百万元。",
          solution: "采用定制化玻璃钢防腐管道系统，配套高效隔热层设计。",
          results: [
            "耐腐蚀性提升300%，预计使用寿命达15年",
            "能耗降低22%，年节省电费约65万元",
            "获客户颁发'年度优质供应商'称号"
          ]
        },
        {
          title: "污水处理厂玻璃钢罐体集群项目",
          challenge: "华北地区最大市政污水厂需建设10个耐酸碱储存罐（单罐容积500m³）。",
          technologies: [
            "采用缠绕成型工艺，罐体轴向强度达280MPa",
            "内衬层添加石墨烯改性树脂，抗渗透性提升40%",
            "现场模块化拼装，工期缩短35天"
          ],
          feedback: "从材料检测到安装指导的全流程专业服务，确保了项目零缺陷验收。"
        },
        {
          title: "化工厂特种管道应急工程",
          emergency: "某化工厂突发管道泄漏，需72小时内完成200米耐HF酸管道更换。",
          responseSteps: [
            "12小时出具材料方案（氟树脂改性玻璃钢）",
            "48小时完成生产并交付",
            "派驻技术团队全程驻场安装"
          ],
          value: "帮助客户避免停产损失约200万元，建立长期战略合作关系"
        }
      ]
    }
  },
  methods: {
    hoverCase(index) {
      // this.hoverIndex = index;
    },
    resetHover() {
      // this.hoverIndex = null;
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

  .success-cases {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.section-title {
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 40px;
  position: relative;
}

.section-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 3px;
  background: #409EFF;
  margin: 15px auto 0;
}

.case-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.case-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.case-header {
  background: #409EFF;
  color: white;
  padding: 20px;
  position: relative;
}

.case-header h3 {
  margin: 0;
  font-size: 20px;
}

.highlight-tag {
  position: absolute;
  top: -10px;
  right: 20px;
  background: #FF6B6B;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  color: white;
}

.case-content {
  padding: 20px;
  color: #555;
  line-height: 1.6;
}

.case-content strong {
  color: #333;
}

.results h4, .tech-highlights h4, .response-timeline h4 {
  color: #409EFF;
  margin: 15px 0 10px;
  font-size: 16px;
}

ul {
  padding-left: 20px;
  margin: 10px 0;
}

li {
  margin-bottom: 8px;
  position: relative;
}

.el-icon-success {
  color: #67C23A;
  margin-right: 5px;
}

.el-icon-odometer {
  color: #E6A23C;
  margin-right: 5px;
}

.client-feedback {
  font-style: italic;
  background: #f5f7fa;
  padding: 10px;
  border-left: 3px solid #409EFF;
  margin-top: 15px;
}

.timeline-badge {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #409EFF;
  color: white;
  border-radius: 50%;
  margin-right: 10px;
  font-size: 12px;
}

.value-statement {
  background: #f0f9eb;
  padding: 10px;
  border-radius: 4px;
  margin-top: 15px;
  color: #67C23A;
  font-weight: bold;
}

.el-icon-data-line {
  margin-right: 5px;
}

@media (max-width: 768px) {
  .case-container {
    grid-template-columns: 1fr;
  }
}
</style>