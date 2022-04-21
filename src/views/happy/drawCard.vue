<template>
	<div class="page-card">
        <!-- <h1 class="title">玄不救非，氪不改命，抽奖有风险，充钱需谨慎</h1> -->
        <div class="subtitle">一块一抽</div>
        <div class="btns">
            <el-button type="primary" @click="clickGoodLuck(1)">小抽一块</el-button>
            <el-button type="primary" @click="clickGoodLuck(10)">中抽十块</el-button>
            <el-button type="primary" @click="clickGoodLuck(100)">大抽一百</el-button>
        </div>
        <div>抽奖结果：</div>
        <el-input type="textarea" :autosize="{minRows: 10}" v-model="drawResult"></el-input>
	</div>
</template>
<script>
import {getRandom} from "@/common/util"
	export default {
		name: "elect",
		data() {
			return {
				// 抽卡概率属性
				probability_golden: 0.6,	//金卡基础概率
                probability_violet: 5.1,	//紫卡基础概率
				totoalCount: 0,				//总抽卡次数
				accNoGoldenCount: 0, 		//不出金次数
				accNoVioletCount: 0, 		//不出紫次数
				awardColor: "blue",			//出啥颜色卡
                drawResult: "",             //储存抽卡结果
                cardList: {
                    card_golden:[
                        { name: 'golden01' },
                        { name: 'golden02' },
                    ],
                    card_violet:[
                        { name: 'violet01' },
                        { name: 'violet02' },
                        { name: 'violet03' },
                        { name: 'violet04' },
                        { name: 'violet05' },
                    ],
                    card_blue:[
                        { name: 'blue01' },
                        { name: 'blue02' },
                        { name: 'blue03' },
                        { name: 'blue04' },
                        { name: 'blue05' },
                        { name: 'blue06' },
                        { name: 'blue07' },
                        { name: 'blue08' },
                        { name: 'blue09' },
                        { name: 'blue10' },
                        { name: 'blue11' },
                    ],
                }
			};
		},
		methods: {
			// 点击抽卡 1次 or 10次
			clickGoodLuck(times) {
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
				this.awardColor = "golden";
                this.awardedGolden(this.cardList.card_golden);
			},
            // 随机抽金卡
            awardedGolden(arr){
                let random = getRandom(0,arr.length-1);
                console.log(random);
                console.log(arr[random].name);
                console.log("---awardedGolden---");
            },
			// 抽中紫卡，重新初始化
			initAwardedViolet(){
				this.probability_violet = 5.1;
				this.accNoVioletCount = 0;
				this.awardColor = "violet";
                this.awardedViolet(this.cardList.card_violet);
			},
            // 随机抽紫卡
            awardedViolet(arr){
                let random = getRandom(0,arr.length-1);
                console.log(random);
                console.log(arr[random].name);
                console.log("---awardedViolet---");
            },
            // 随机抽蓝卡
            awardedBlue(arr){
                let random = getRandom(0,arr.length-1);
                console.log(random);
                console.log(arr[random].name);
                console.log("---awardedViolet---");
            },
			//单抽概率计算
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
					this.awardColor = "blue";
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
</style>

