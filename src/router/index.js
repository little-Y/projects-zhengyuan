import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Home from '@/components/home'
import Self from '@/components/self'
// 小型
import Small from '@/components/small/index'
import twoMM from '@/components/small/MA10'
import K9700 from '@/components/small/9700k'
import AM17 from '@/components/small/am17'
import AM172 from '@/components/small/AM172'
import AMSH7 from '@/components/small/amsh7'
import CM8 from '@/components/small/cm8'
import AM15 from '@/components/small/ma15'
import AM6 from '@/components/small/ma6'
import AM7 from '@/components/small/ma7'
import YS11 from '@/components/small/ys11'
import YS7 from '@/components/small/ys7'
// 汽车
import Car from '@/components/car/index'
import AP5 from '@/components/car/5ap'
import AP6 from '@/components/car/6ap'
import EXT200 from '@/components/car/ext200'
import EXT300 from '@/components/car/ext300'
import EXT500 from '@/components/car/ext500'
import MAX1 from '@/components/car/max1'
import SMB from '@/components/car/smb'
// 突跳式温控
import Temperature from '@/components/temperature/index'
import NT1 from '@/components/temperature/1nt'
// 过温过电流
import OverElectic from '@/components/overelectic/index'
import HM14 from '@/components/overelectic/14hm'
import HM15 from '@/components/overelectic/15hm'
import AM2 from '@/components/overelectic/2am'
import MP2 from '@/components/overelectic/2mp'
import HM34 from '@/components/overelectic/34hm'
import HM35 from '@/components/overelectic/35hm'
import HM37 from '@/components/overelectic/37hm'
import HM3 from '@/components/overelectic/3hm'
import MP3 from '@/components/overelectic/3mp'
import AM8 from '@/components/overelectic/8am'
import PTC from '@/components/overelectic/ptc'
import SINGLE from '@/components/overelectic/single'
// 敞开式
import Open from '@/components/open/index'
import MA10 from '@/components/open/ma10'
import YS10 from '@/components/open/ys10'
import TH10 from '@/components/open/th10'
import TH11 from '@/components/open/th11'

Vue.use(Router)

export default new Router({
	 routes: [
	    {
	      	path: '/',
	      	component: Index,
	      	children: [
	      		{
	      			path: '/',
	      			name: 'home',
	      			component: Home
	      		},
	      		{
	      			path: '/home',
	      			name: 'home',
	      			component: Home
	      		},
	      		{
	      			path: '/self',
	      			name: 'self',
	      			component: Self
	      		},
	      		// 小型热保护器
	      		{
	      			path: '/small',
	      			name: 'small',
	      			component: Small
	      		},
	      		{
	      			path: '/2MM',
	      			name: '2MM',
	      			component: twoMM
	      		},
	      		{
	      			path: '/9700K',
	      			name: '9700K',
	      			component: K9700
	      		},
	      		{
	      			path: '/17AM',
	      			name: '17NM',
	      			component: AM17
	      		},
	      		{
	      			path: '/17AM-2',
	      			name: '17AM2',
	      			component: AM172
	      		},
	      		{
	      			path: '/7AMSH',
	      			name: '7AMSH',
	      			component: AMSH7
	      		},
	      		{
	      			path: '/8CM',
	      			name: '8CM',
	      			component: CM8
	      		},
	      		{	
	      			path: '/15AM',
	      			name: '15AM',
	      			component: AM15
	      		},
	      		{
	      			path: '/6AM',
	      			name: '6AM',
	      			component: AM6
	      		},
	      		{
	      			path: '/7AM',
	      			name: '7AM',
	      			component: AM7
	      		},
	      		{
	      			path: '/YS11',
	      			name: 'YS11',
	      			component: YS11
	      		},
	      		{
	      			path: '/YS7',
	      			name: 'YS7',
	      			component: YS7
	      		},
	      		// 敞开
	      		{
	      			path: '/open',
	      			name: 'open',
	      			component: Open
	      		},
	      		{
	      			path: '/MA10',
	      			name: 'MA10',
	      			component: MA10
	      		},
	      		{
	      			path: '/YS10',
	      			name: 'YS10',
	      			component: YS10
	      		},
	      		{
	      			path: '/TH10',
	      			name: 'TH10',
	      			component: TH10
	      		},
	      		{
	      			path: '/TH11-TH21',
	      			name: 'TH11',
	      			component: TH11
	      		},
	      		// 过温过电流
	      		{
	      			path: '/overElectic',
	      			name: 'overElectic',
	      			component: OverElectic
	      		},
	      		{
	      			path: '/14HM',
	      			name: 'HM14',
	      			component: HM14
	      		},
	      		{
	      			path: '/15HM',
	      			name: 'HM15',
	      			component: HM15
	      		},
	      		{
	      			path: '/2AM',
	      			name: 'AM2',
	      			component: AM2
	      		},
	      		{
	      			path: '/2MP',
	      			name: 'MP2',
	      			component: MP2
	      		},
	      		{
	      			path: '/34HM',
	      			name: 'HM34',
	      			component: HM34
	      		},
	      		{
	      			path: '/35HM',
	      			name: 'HM35',
	      			component: HM35
	      		},
	      		{
	      			path: '/37HM',
	      			name: 'HM37',
	      			component: HM37
	      		},
	      		{
	      			path: '/3HM',
	      			name: 'HM3',
	      			component: HM3
	      		},
	      		{
	      			path: '/3MP',
	      			name: 'MP3',
	      			component: MP3
	      		},
	      		{
	      			path: '/8AM',
	      			name: 'AM8',
	      			component: AM8
	      		},
	      		{
	      			path: '/3MP+PTC',
	      			name: 'PTC',
	      			component: PTC
	      		},
	      		{
	      			path: '/单相、三相外置式',
	      			name: 'SINGLE',
	      			component: SINGLE
	      		},
	      		// 突跳式
	      		{
	      			path: '/temperature',
	      			name: 'temperature',
	      			component: Temperature
	      		},
	      		{
	      			path: '/1NT',
	      			name: '1NT',
	      			component: NT1
	      		},
	      		// 汽车直流
	      		{
	      			path: '/car',
	      			name: 'car',
	      			component: Car
	      		},
	      		{
	      			path: '/5AP',
	      			name: '5AP',
	      			component: AP5
	      		},
	      		{
	      			path: '/6AP',
	      			name: '6AP',
	      			component: AP6
	      		},
	      		{
	      			path: '/EXT200',
	      			name: 'EXT200',
	      			component: EXT200
	      		},
	      		{
	      			path: '/EXT300',
	      			name: 'EXT300',
	      			component: EXT300
	      		},
	      		{
	      			path: '/EXT500',
	      			name: 'EXT500',
	      			component: EXT500
	      		},
	      		{
	      			path: '/MXA1',
	      			name: 'MXA1',
	      			component: MAX1
	      		},
	      		{
	      			path: '/SMB',
	      			name: 'SMB',
	      			component: SMB
	      		}
	      	]
	    }
	 ]
})
