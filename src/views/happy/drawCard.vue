<template>
<div class="page">
    <div class="page-card">
        <h1 class="title">玄不救非，氪不改命，抽奖有风险，充钱需谨慎</h1>
        <div class="subtitle">一块一抽</div>
        <div class="btns">
            <el-button type="primary" @click="clickGoodLuck(1)">小抽一块</el-button>
            <el-button type="primary" @click="clickGoodLuck(10)">大抽十块</el-button>
            <!-- <el-button type="primary" @click="clickGoodLuck(100)">大抽一百</el-button> -->
        </div>
        <div class="titles">
            <span class="result">抽奖结果：</span>
            <span class="result">抽奖次数：{{totoalCount}}次</span>
            <el-button @click="clearCard">清空</el-button>
        </div>
        <el-input type="textarea" :autosize="{minRows: 10}" v-model="results"></el-input>
        <!-- <draw-card :name={} @click="computeProOne"></draw-card> -->
	</div>
    <div class="draw" v-if="isDraw">
        <div class="draw-page">
            <div class="cards">
                <div class="card"  v-for="(item, index) in drawCardList" :key="index">
                    <draw-card :cardName="item.name" :frontImg="item.img" :behindImg="item.bc"></draw-card>
                </div>
                <!-- <div class="card">
                    <draw-card cardName="haha" frontImg="#db70db" behindImg="#70db93"></draw-card>
                </div> -->
            </div>
            <div class="buttons">
                <el-button class="button" type="primary" @click="yes">确定</el-button>
                <el-popconfirm title="确定不要这次抽奖的结果吗？" @confirm="no">
                    <el-button class="button" slot="reference" type="danger">取消</el-button>
                </el-popconfirm>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {getRandom} from "@/common/util"
	export default {
		name: "elect",
		data() {
			return {
                isDraw: false,
				// 抽卡概率属性
				probability_golden: 0.6,	//金卡基础概率
                probability_violet: 5.1,	//紫卡基础概率
				totoalCount: 0,				//总抽卡次数
				accNoGoldenCount: 0, 		//不出金次数
				accNoVioletCount: 0, 		//不出紫次数
                results: "",                //储存抽卡结果
                drawCardList: [],           //抽卡结果
                cardList: {
                    card_golden:[
                        { name: 'golden01', draw: 0, img: "yellow", bc:"yellow", },
                        { name: 'golden02', draw: 0, img: "yellow", bc:"yellow", },
                    ],
                    card_violet:[
                        { name: 'violet01', draw: 0, img: "#db70db", bc:"#db70db", },
                        { name: 'violet02', draw: 0, img: "#db70db", bc:"#db70db", },
                        { name: 'violet03', draw: 0, img: "#db70db", bc:"#db70db", },
                        { name: 'violet04', draw: 0, img: "#db70db", bc:"#db70db", },
                        { name: 'violet05', draw: 0, img: "#db70db", bc:"#db70db", },
                    ],
                    card_blue:[
                        { name: 'blue01', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue02', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue03', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue04', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue05', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue06', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue07', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue08', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue09', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue10', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue11', draw: 0, img: "skyblue", bc:"skyblue", },
                    ],
                }
			};
		},
		methods: {
            yes(){
                this.isDraw = false;
            },
            no(){
                this.isDraw = false;
            },
            clearCard(){
                this.probability_golden = 0.6;	//金卡基础概率
                this.probability_violet = 5.1;	//紫卡基础概率
				this.totoalCount = 0;				//总抽卡次数
				this.accNoGoldenCount = 0; 		//不出金次数
				this.accNoVioletCount = 0; 		//不出紫次数
                this.results = "";                //储存抽卡结果
                this.drawCardList = [];           //抽卡结果
                this.cardList = {
                    card_golden:[
                        { name: 'golden01', draw: 0, img: "yellow", bc:"yellow", },
                        { name: 'golden02', draw: 0, img: "yellow", bc:"yellow", },
                    ],
                    card_violet:[
                        { name: 'violet01', draw: 0, img: "#db70db", bc:"#db70db", },
                        { name: 'violet02', draw: 0, img: "#db70db", bc:"#db70db", },
                        { name: 'violet03', draw: 0, img: "#db70db", bc:"#db70db", },
                        { name: 'violet04', draw: 0, img: "#db70db", bc:"#db70db", },
                        { name: 'violet05', draw: 0, img: "#db70db", bc:"#db70db", },
                    ],
                    card_blue:[
                        { name: 'blue01', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue02', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue03', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue04', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue05', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue06', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue07', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue08', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue09', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue10', draw: 0, img: "skyblue", bc:"skyblue", },
                        { name: 'blue11', draw: 0, img: "skyblue", bc:"skyblue", },
                    ],
                };
            },
			// 点击抽卡 1次 or 10次
			clickGoodLuck(times) {
                this.isDraw = true;
                this.drawCardList = [];
                if (times == 1) {
					this.computeProOne();
                } else {
					this.computeProTen();
				}
            },
			// 抽中金卡，重新初始化
			initAwardedGolden(){
				this.probability_golden = 0.6;
				this.accNoGoldenCount = 0;
                this.awardedGolden(this.cardList.card_golden);
			},
            // 随机抽金卡
            awardedGolden(arr){
                let random = getRandom(0,arr.length-1);
                arr[random].draw++;
                this.drawCardList.push(arr[random]);
                this.sumResult();
            },
			// 抽中紫卡，重新初始化
			initAwardedViolet(){
				this.probability_violet = 5.1;
				this.accNoVioletCount = 0;
                this.awardedViolet(this.cardList.card_violet);
			},
            // 随机抽紫卡
            awardedViolet(arr){
                let random = getRandom(0,arr.length-1);
                arr[random].draw++;
                this.drawCardList.push(arr[random]);
                this.sumResult();
            },
            // 随机抽蓝卡
            awardedBlue(arr){
                let random = getRandom(0,arr.length-1);
                arr[random].draw++;
                this.drawCardList.push(arr[random]);
                this.sumResult();
            },
            // 汇总抽奖结果
            sumResult(){
                this.results = "";
                let list = this.cardList;
                for (const index in list) {
                    let arr = list[index]
                    console.log(arr);
                    console.log('---arr---');
                    for (const item of arr) {
                        if(item.draw !== 0) this.results += `${item.name}：${item.draw}次\n`;
                    }
                }
            },
			/*
            * 单抽概率计算
            * 生成两个随机数，当随机数小于出相应颜色卡的概率时提示出相应的卡，同时记录总抽卡数来设置保底
            */ 
			computeProOne(){
				this.totoalCount++;
                let randomGolden = (Math.random() * 100).toFixed(2);  // 生成随机数，当随机数小于出金概率时抽到金卡
                let randomNumViolet = (Math.random() * 100).toFixed(2);  //
				//是否出金 出金大保低
				if(this.accNoGoldenCount>=90){
					// console.log("出金啦/大保低：", "金卡基础概率：" + this.probability_golden, "~" + randomGolden+" 抽卡次数：",this.totoalCount);
					this.initAwardedGolden();
					return;
				}
				//是否出金 出金小保低
				if(this.accNoGoldenCount>=73){
					if (this.probability_golden >= randomGolden) {
						// console.log("出金啦/小保低：", "金卡基础概率：" + this.probability_golden, "~" + randomGolden+" 抽卡次数：",this.totoalCount);
						this.initAwardedGolden();
						return;
					}else{
						this.probability_golden += 6;
					}
				}
				//是否出金  出金小欧皇
				if(this.accNoGoldenCount<=73){
					if (this.probability_golden >= randomGolden) {
						// console.log("出金啦/欧皇：", "金卡基础概率：" + this.probability_golden, "~" + randomGolden+" 抽卡次数：",this.totoalCount);
						this.initAwardedGolden();
						return;
					}
				}
				//是否出紫 
				if(this.probability_violet >= randomNumViolet){
					// console.log("出紫/欧皇：", "紫卡基础概率：" + this.probability_violet, "~" + randomNumViolet+" 抽卡次数：",this.totoalCount);
					this.initAwardedViolet();
				}else{
					this.accNoVioletCount++;
					if(this.accNoVioletCount==8){
						this.probability_violet += 51;
					}
					if(this.accNoVioletCount==9){
						this.probability_violet = 100;
					}
					// 出蓝
                    this.awardedBlue(this.cardList.card_blue);
					// console.log("出蓝：", "紫卡基础概率：" + this.probability_violet, "~" + randomNumViolet+" 抽卡次数：",this.totoalCount);
				}
				this.accNoGoldenCount++;
			},
			//10连概率计算
			computeProTen(){
				for (let i = 0; i < 10; i++) {
					this.computeProOne();
				}
			},
		},
	};
</script>
<style lang="scss" scoped>
.titles{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
}
.draw{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    .draw-page{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        padding: 50px;
        .cards{
            display: flex;
            // flex-direction: row;
            align-items: center;
            justify-content: center;
            .card{
                margin: 0 10px;
            }
        }
        .buttons{
            text-align: center;
            margin: 10px 0;
            .button{
                margin: 0 10px;
            }
        }
    }
}
.title{
    text-align: center;
}
.subtitle{
    padding: 10px;
    text-align: center;
}
.btns{
    padding: 10px;
    text-align: center;
}
.Results{
    display: flex;
    flex-direction: row;
    justify-content: center;
    .goldenResult{
        width: 100px;
    }
    .violetResult{
        width: 100px;
    }
    .blueResult{
        width: 100px;
    }
}
</style>

