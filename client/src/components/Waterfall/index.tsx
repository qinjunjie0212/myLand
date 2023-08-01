import React, {useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../Card'

interface card{
    src:string;
    id:number;
    message:string;
    userName:string;
    userPic:string;
    likeNum:number;
    like:boolean;
    // show:Function;
  }
  
  //卡片信息
  const cards: card[] = [
      {
        src:'http://localhost:3000/static/media/cat.14a0caec35324158349a.jpg',
        id:111,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false
      },
      {
        src:'http://localhost:3000/static/media/moon.095c2565947c0ce84938.webp',
        id:222,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },
      {
        src:'http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        id:333,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },
      {
        src:'http://localhost:3000/static/media/mouse.1b3f52853472ad02dc42.jpg',
        id:444,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },
      {
        src:'http://localhost:3000/static/media/plate.63df07d8a1189ba63282.webp',
        id:555,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },
      {
        src:'http://localhost:3000/static/media/cat.14a0caec35324158349a.jpg',
        id:111,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false
      },
      {
        src:'http://localhost:3000/static/media/moon.095c2565947c0ce84938.webp',
        id:222,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },
      {
        src:'http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        id:333,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },
      {
        src:'http://localhost:3000/static/media/mouse.1b3f52853472ad02dc42.jpg',
        id:444,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },
      {
        src:'http://localhost:3000/static/media/plate.63df07d8a1189ba63282.webp',
        id:555,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },
      {
        src:'http://localhost:3000/static/media/cat.14a0caec35324158349a.jpg',
        id:111,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false
      },
      {
        src:'http://localhost:3000/static/media/moon.095c2565947c0ce84938.webp',
        id:222,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },
      {
        src:'http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        id:333,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },
      {
        src:'http://localhost:3000/static/media/mouse.1b3f52853472ad02dc42.jpg',
        id:444,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },
      {
        src:'http://localhost:3000/static/media/plate.63df07d8a1189ba63282.webp',
        id:555,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252,
        like:false

      },

  ]

const Waterfall: React.FC = () => {
    const navigate = useNavigate()
    let cardMes = {
        src:'http://localhost:3000/static/media/moon.095c2565947c0ce84938.webp',
        id:555,
        message:'我的文案111',
        userName:'用户名111',
        userPic:'	http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
        likeNum:252
      } 
      // 设置盒子合理摆放
      useEffect(()=>{
        fWaterFall()
        // window.addEventListener('scroll',function(){})
        window.onscroll = function(){
            if(fScrollTop()){
                // console.log(111);
                let container = document.querySelector('.home-body') as HTMLElement
    
                let box = document.createElement('div')
                box.className = 'card'
    
                let oItem = document.createElement('div')
                oItem.className = 'card-wai'
    
                let oCard = document.createElement('div')
                oCard.className = 'card-box'
    
                // 传入的图片
                let oImg = document.createElement('img')
                oImg.src = cardMes.src
                //  文案
                let oMes = document.createElement('div')
                oMes.className = 'cardMessage'
                oMes.innerHTML = cardMes.message
                //  用户信息
                let userBox = document.createElement('div')
                userBox.className = 'cardBotton'
                // 左边容器，装头像用户名
                let userLeft = document.createElement('div')
                userLeft.className = 'left'
                // 头像
                let userPic = document.createElement('img')
                userPic.className = 'userPic'
                userPic.src = cardMes.userPic
                // 用户名
                let userName = document.createElement('span')
                userName.className = 'userName'
                userName.innerHTML = cardMes.userName
                // 右边容器，装点赞相关
                let userRight = document.createElement('div')
                userRight.className = 'right'
                let liked = document.createElement('span')
                liked.className = 'liked'
                // liked.innerHTML = '111'
                let likeNum = document.createElement('span')
                likeNum.className = 'likeNum'
                likeNum.innerHTML = cardMes.likeNum.toString()
    
                //增加
                container.appendChild(box)
                box.appendChild(oItem)
                oItem.appendChild(oCard)
                oCard.appendChild(oImg)
                oCard.appendChild(oMes)
                oCard.appendChild(userBox)
                userBox.appendChild(userLeft)
                userLeft.appendChild(userPic)
                userLeft.appendChild(userName)
                userBox.appendChild(userRight)
                userRight.appendChild(liked)
                userRight.appendChild(liked)
                userRight.appendChild(likeNum)
    
            }
              fWaterFall()
        }
      },[])
      // window.onload = function(){
      //   fWaterFall()
      //   window.onscroll = function(){
      //       if(fScrollTop()){
      //           // console.log(111);
      //           let container = document.querySelector('.home-body') as HTMLElement
    
      //           let box = document.createElement('div')
      //           box.className = 'card'
    
      //           let oItem = document.createElement('div')
      //           oItem.className = 'card-wai'
    
      //           let oCard = document.createElement('div')
      //           oCard.className = 'card-box'
    
      //           // 传入的图片
      //           let oImg = document.createElement('img')
      //           oImg.src = cardMes.src
      //           //  文案
      //           let oMes = document.createElement('div')
      //           oMes.className = 'cardMessage'
      //           oMes.innerHTML = cardMes.message
      //           //  用户信息
      //           let userBox = document.createElement('div')
      //           userBox.className = 'cardBotton'
      //           // 头像
      //           let userPic = document.createElement('img')
      //           userPic.src = cardMes.userPic
      //           // userPic.style = {width:'20px',borderRadius:'50%'}
      //           // 用户名
      //           let userName = document.createElement('span')
      //           userName.innerHTML = cardMes.userName
                
    
      //           //增加
      //           container.appendChild(box)
      //           box.appendChild(oItem)
      //           oItem.appendChild(oCard)
      //           oCard.appendChild(oImg)
      //           oCard.appendChild(oMes)
      //           oCard.appendChild(userBox)
      //           userBox.appendChild(userPic)
      //           userBox.appendChild(userName)
    
      //       }
      //         fWaterFall()
      //   }
      // }

      function fWaterFall(){
          let container = document.querySelector('.home-body') as HTMLElement
          let oItems = document.querySelectorAll('.card-wai') as NodeListOf<HTMLElement>;
          let homeBox = document.querySelector('.home-box') as HTMLElement
          
          
          let boxWidth = homeBox.offsetWidth as number
          let itemWidth = oItems[0].offsetWidth as number
  
          // 一行的个数
          let num = Math.floor(boxWidth / itemWidth);
  
          // 设置container宽度
          container.style.width = num * itemWidth + 'px';
  
          let hrr: number[] = [];
          // 合理摆放
          for (let i = 0; i < oItems.length; i++) {
              if (i < num) {
                  //第一排
                  hrr.push(Math.floor(oItems[i].offsetHeight + 20.67));
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
            return true;
        } else {
            return false;
        }
      }

      // function show(card:any){
      //   return ()=>{
      //     console.log(card);
      //     // navigate('/home/detail',{state:card})
      //   }
        
      // }
  
    return (
        <div className='home-body'>
            {
                cards.map((card) => {
                    return (
                        <div  className='card'>
                            <Card 
                                cardSrc={card.src} 
                                cardMessage={card.message} 
                                userName={card.userName} 
                                userPic={card.userPic}
                                likeNum={card.likeNum}
                                key={card.id}
                                userId={card.id}
                                liked={card.like}
                                // onClick={show(card)}
                            />
                        </div>
                    )
                })
            }
        </div>
        
    )
}

export default Waterfall