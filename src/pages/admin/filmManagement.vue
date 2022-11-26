<template>
  <div id="filmManagement">
    <el-form ref="form" :model="form" label-width="110px">
      <el-form-item label="电影名称">
        <el-col :span="11"><el-input v-model="form.name"></el-input></el-col>
      </el-form-item>

      <el-form-item label="种类">
        <el-radio-group v-model="form.classify.type">
          <el-radio
            v-for="item in classList[0]"
            :label="item"
          ></el-radio> </el-radio-group
        ><br />
        <el-radio-group v-model="form.classify.region">
          <el-radio
            v-for="item in classList[1]"
            :label="item"
          ></el-radio> </el-radio-group
        ><br />
        <el-radio-group v-model="form.classify.period">
          <el-radio v-for="item in classList[2]" :label="item"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="电影时长">
        <el-col :span="11">
          <el-input v-model="form.duration" placeholder="100分钟"></el-input
        ></el-col>
      </el-form-item>
      <el-form-item label="电影热度">
        <el-col :span="11">
          <el-input v-model="form.hot" placeholder="0-100"></el-input
        ></el-col>
      </el-form-item>

      <el-form-item label="上映时间">
        <el-col :span="11">
          <el-input v-model="form.date" placeholder="2022-11-24"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="演员图集">
        <el-input
          v-model="form.description.actor"
          placeholder="xxx,xxx"
        ></el-input>
      </el-form-item>
      <el-form-item label="电影图集">
        <el-input
          v-model="form.description.gallery"
          placeholder="xxx,xxx"
        ></el-input>
      </el-form-item>

      <el-form-item label="电影简述">
        <el-input
          type="textarea"
          v-model="form.description.text"
          placeholder="xxxxxxxxxxx"
        ></el-input>
      </el-form-item>

      <el-form-item label="演员名单">
        <el-col :span="11"
          ><el-input
            v-model="form.description.actors"
            placeholder="xxx,xxx,xx"
          ></el-input
        ></el-col>
      </el-form-item>

      <el-form-item label="电影院图片">
        <el-input
          v-model="form.location[0].address"
          placeholder="url"
        ></el-input>
      </el-form-item>

      <el-form-item label="电影院排场日期">
        <el-input
          v-model="form.location[0].date"
          placeholder="例：11月24"
        ></el-input>
      </el-form-item>

      <el-form-item label="电影院信息">
        <el-radio-group v-model="form.location[0].brand">
          <el-radio
            v-for="item in seatList[0]"
            :label="item"
          ></el-radio> </el-radio-group
        ><br />
        <el-radio-group v-model="form.location[0].district">
          <el-radio
            v-for="item in seatList[1]"
            :label="item"
          ></el-radio> </el-radio-group
        ><br />
        <el-radio-group v-model="form.location[0].cinemaType">
          <el-radio v-for="item in seatList[2]" :label="item"></el-radio>
        </el-radio-group>
        <el-radio-group v-model="form.location[0].service">
          <el-radio v-for="item in seatList[3]" :label="item"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="电影院地址">
        <el-input
          v-model="form.location[0].information"
          placeholder="xxxxx"
        ></el-input>
      </el-form-item>

      <el-form-item label="电影价格">
        <el-col :span="11">
          <el-input v-model="form.location[0].price" placeholder="53"></el-input
        ></el-col>
      </el-form-item>

      <el-form-item label="影院时长">
        <el-col :span="11">
          <el-input
            v-model="form.location[0].time"
            placeholder="100分钟"
          ></el-input
        ></el-col>
      </el-form-item>

      <el-form-item label="语言">
        <el-col :span="11">
          <el-input
            v-model="form.location[0].language"
            placeholder="国语"
          ></el-input
        ></el-col>
      </el-form-item>

      <el-form-item label="厅号">
        <el-col :span="11">
          <el-input
            v-model="form.location[0].room"
            placeholder="5号厅"
          ></el-input
        ></el-col>
      </el-form-item>

      <el-form-item label="评分">
        <el-col :span="11">
          <el-input v-model="form.rating" placeholder="0-10"></el-input
        ></el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addMovies } from "../../api";
export default {
  name: "filmManagement",
  data() {
    return {
      classList: [
        [
          "爱情",
          "喜剧",
          "动画",
          "剧情",
          "恐怖",
          "惊悚",
          "科幻",
          "动作",
          "悬疑",
          "犯罪",
          "冒险",

          "战争",
          "奇幻",
          "运动",
          "家庭",
          "古装",
          "武侠",
          "西部",
          "历史",
          "传记",
          "歌舞",
          "黑色电影",
          "短片",

          "纪录片",
          "戏曲",
          "音乐",
          "灾难",
          "青春",
          "儿童",
          "其他",
        ],

        [
          "大陆",
          "美国",
          "韩国",
          "日本",
          "中国香港",
          "中国台湾",
          "泰国",
          "印度",
          "法国",
          "英国",
          "俄罗斯",
          "意大利",
          "西班牙",
          "德国",
          "波兰",
          "澳大利亚",
          "伊朗",
          "其他",
        ],

        [
          "2022",
          "2021",
          "2020",
          "2019",
          "2018",
          "2017",
          "2016",
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2000-2010",
          "90年代",
          "80年代",
          "70年代",
          "更早",
        ],
      ],
      seatList: [
        [
          "太平洋电影城",
          "万达影城",
          "CGV影城",
          "横店影视",
          "橙天嘉禾影城",
          "UME国际影城",
          "保利万和国际影城",
          "卢米埃影城",
          "星光影城",
          "金逸影城",
          "EVO艺威影院",
          "幸福蓝海国际影城",
          "中影南方国际影城",
          "苏宁影城",
          "橙天国际影城",
          "沃美影城",
          "保利国际影城",
          "博纳国际影城",
          "星轶starx影城",

          "恒大嘉凯影城",
          "百老汇影城",
          "中影嘉莱国际影城",
          "大地影院",

          "百丽宫影城",
          "SFC上影影城",
          "中影星美国际影城",
          "中影泰得影城",
          "烽禾影城",
          "完美世界影城",

          "九州森美国际影城",
          "星河国际影城",
          "英皇ua电影城",
          "维多利影城",
          "海逸影城",
          "上影国际影城",

          "华联影城",
          "UA影院",
          "ACTO梦空间影城",
          "中影UL城市影院",

          "嘉裕国际影城",
          "嘉美国际影城",
          "欢乐小马电影城",
          "左岸国际影城",
          "海上国际影城",
          "至潮主题影城",
          "耀莱成龙国际影城",
          "其他",
        ],

        [
          "地铁附近",
          "武侯区",
          "双流区",
          "成华区",
          "郫都区",
          "新都区",
          "锦江区",
          "金牛区",
          "青羊区",
          "龙泉驿区",
          "温江区",

          "都江堰市",
          "金堂县",
          "索州市",
          "青白江区",
          "彭州市",
          "邛崃市",
          "大邑县",
          "新津区",
          "简阳市",
          "蒲江县",
        ],
        [
          "IMAX厅",
          "CGS中国巨幕厅",
          "杜比全景声厅",
          "Dolby Cinema厅",
          "ReaID厅",
          "RealD 6FL厅",
          "LUXE巨幕厅",
          "4DX厅",
          "DTS:X临境音厅",
          "儿童厅",
          "4K厅",

          "4D厅",
          "60帧厅",
          "120帧/4K厅",
          "巨幕厅",
          "CINITY厅",
          "MX4D厅",
          "激光厅",
          "ALPD Pro高亮厅",
        ],

        ["可改签", "可退票"],
      ],
      form: {
        name: "",
        classify: {
          type: "",
          region: "",
          period: "",
        },
        duration: "",
        hot: "",
        date: "",
        description: {
          text: "",
          comments: [],
          actors: "",
          actor: [],
          gallery: [],
        },
        location: [
          {
            information: "",
            seats: [
              ["false", "false", "false", "false", "false", "false"],
              ["false", "false", "false", "false", "false", "false"],
              ["false", "false", "true", "false", "false", "false"],
              ["false", "false", "false", "false", "false", "false"],
              ["false", "false", "false", "true", "false", "false"],
            ],
            date: "",
            brand: "",
            district: "",
            cinemaType: "",
            service: "",
            address: "",
            price: "",
            time: "",
            language: "",
            room: "",
          },
        ],
        rating: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      this.form.description.actor = this.form.description.actor.split(",");
      this.form.description.gallery = this.form.description.gallery.split(",");
      console.log("form", this.form);
      const res = await addMovies(this.form);
      console.log("res", res);
    },
  },
};
</script>

<style scoped lang="scss">
#filmManagement {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
