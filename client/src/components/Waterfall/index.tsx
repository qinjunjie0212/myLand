import React, {useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../Card'

import { Alert, Space, Spin } from 'antd';

  interface WaterfallProps {
    cardMessage: any[];
    isloading:boolean;
    error:any
  }

const Waterfall: React.FC<WaterfallProps> = (cardMessage) => {
      // console.log(cardMessage.error&&cardMessage.error.response.data)
      
    //   cardMessage.error!==null&&alert(cardMessage.error.response.data)
      // console.log('props',cardMessage);
//     const navigate = useNavigate()
      useEffect(()=> {
        let cardMes = {
          src:'http://localhost:3000/static/media/moon.095c2565947c0ce84938.webp',
          id:555,
          message:'我的文案111',
          userName:'用户名111',
          userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
          likeNum:252
        } 
        // // 设置盒子合理摆放
        // useEffect(()=>{
          // fWaterFall()
          // window.addEventListener('scroll',function(){})
          // window.onscroll = function(){
          //     //   if(fScrollTop()){
          //     //     console.log(111);
          //     //     let container = document.querySelector('.home-body') as HTMLElement
      
          //     //     let box = document.createElement('div')
          //     //     box.className = 'card'
      
          //     //     let oItem = document.createElement('div')
          //     //     oItem.className = 'card-wai'
      
          //     //     let oCard = document.createElement('div')
          //     //     oCard.className = 'card-box'
      
          //     //     // 传入的图片
          //     //     let oImg = document.createElement('img')
          //     //     oImg.src = cardMes.src
          //     //     //  文案
          //     //     let oMes = document.createElement('div')
          //     //     oMes.className = 'cardMessage'
          //     //     oMes.innerHTML = cardMes.message
          //     //     //  用户信息
          //     //     let userBox = document.createElement('div')
          //     //     userBox.className = 'cardBotton'
          //     //     // 左边容器，装头像用户名
          //     //     let userLeft = document.createElement('div')
          //     //     userLeft.className = 'left'
          //     //     // 头像
          //     //     let userPic = document.createElement('img')
          //     //     userPic.className = 'userPic'
          //     //     userPic.src = cardMes.userPic
          //     //     // 用户名
          //     //     let userName = document.createElement('span')
          //     //     userName.className = 'userName'
          //     //     userName.innerHTML = cardMes.userName
          //     //     // 右边容器，装点赞相关
          //     //     let userRight = document.createElement('div')
          //     //     userRight.className = 'right'
          //     //     let liked = document.createElement('span')
          //     //     liked.className = 'liked'
          //     //     // liked.innerHTML = '111'
          //     //     let likeNum = document.createElement('span')
          //     //     likeNum.className = 'likeNum'
          //     //     likeNum.innerHTML = cardMes.likeNum.toString()
      
          //     //     //增加
          //     //     container.appendChild(box)
          //     //     box.appendChild(oItem)
          //     //     oItem.appendChild(oCard)
          //     //     oCard.appendChild(oImg)
          //     //     oCard.appendChild(oMes)
          //     //     oCard.appendChild(userBox)
          //     //     userBox.appendChild(userLeft)
          //     //     userLeft.appendChild(userPic)
          //     //     userLeft.appendChild(userName)
          //     //     userBox.appendChild(userRight)
          //     //     userRight.appendChild(liked)
          //     //     userRight.appendChild(liked)
          //     //     userRight.appendChild(likeNum)
      
          //     // }
          //       fWaterFall()
          // }
        // },[])
        // 监听鼠标滚动事件
        document.addEventListener("wheel", handleScroll);

        // 处理滚动事件的函数
        function handleScroll(e:any) {
          // e.
          // 滚动时执行的操作
          fWaterFall()
        }

        // 在离开页面之前移除滚动事件的监听
        // function removeScrollEvent() {
        //   document.removeEventListener("wheel", handleScroll);
        //   console.log('离开了');
          
        // }

        // 调用该函数以删除原来的滚动事件（例如在离开页面时调用）
        // removeScrollEvent();
  
        function fWaterFall(){
            let container = document.querySelector('.home-body') as HTMLElement
            let oItems = document.querySelectorAll('.card-wai') as NodeListOf<HTMLElement>;
            let homeBox = document.querySelector('.home-box') as HTMLElement
            
            let boxWidth = homeBox.offsetWidth as number
            
            let itemWidth = oItems[0]?.offsetWidth as number
            
    
            // 一行的个数
            let num = Math.floor(boxWidth / itemWidth);
    
            // 设置container宽度
            container.style.width = num * itemWidth + 'px';
    
            let hrr: number[] = [];
            // 合理摆放
            for (let i = 0; i < oItems.length; i++) {
                if (i < num) {
                    //第一排
                    hrr.push(oItems[i].offsetHeight);
                } else {
                    // 第一排之后
                    let minH = Math.min(...hrr);
                    
                    let index = fInArray(minH, hrr);
                    
                    (oItems[i] as HTMLElement).style.position = 'absolute';
                    (oItems[i] as HTMLElement).style.left = index * itemWidth + 'px';
                    (oItems[i] as HTMLElement).style.top = minH + 'px';
    
                    hrr[index] += oItems[i].offsetHeight;
                }
            }
            
         }
    
        // 数组最小值的位置
        function fInArray(min: number, array: number[]): number {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === min) {
                    return i;
                }
            }
            return -1;
        }
    
        // 判断什么条件加载图片
        function fScrollTop(){
          // 所有item
          let items = document.querySelector('.home-body') as HTMLElement;
          // 最后一个item
          let lastItem = items.lastElementChild as HTMLElement;
          // 可视区域高度
          let clientHeight = document.documentElement.clientHeight;
          // 滚动距离
          let scrollTop = document.documentElement.scrollTop;
          
          if (lastItem.offsetTop < clientHeight + scrollTop) {
              // console.log(lastItem);
              
              return true;
          } else {
              return false;
          }
        }     
      },[cardMessage.isloading])
  
    return (
        
        <div className='home-body' style={{position:'relative'}}>
            
            {
              // {props}
              cardMessage.error 
              ? <Alert message={cardMessage.error.response.data} type="error" showIcon /> 
              : (cardMessage.isloading
              ? <Spin tip="Loading" size="large" style={{position:'absolute',top:'200px',left:'0px'}}>
                    <div className="content" />
                </Spin>
              : cardMessage.cardMessage &&
                cardMessage.cardMessage.map((card:any) => {
                    return (
                        <div  className='card'>
                            <Card 
                                cardSrc={card.img} 
                                cardMessage={card.desc} 
                                userName={card.username} 
                                userPic={card.userpic}
                                likeNum={card.likeNum}
                                key={card.id}
                                userId={card.id}
                                // liked={card.like}
                                // onClick={show(card)}
                            />
                        </div>
                    )
                }))
            }
            
        </div>
        
    )
}

export default Waterfall