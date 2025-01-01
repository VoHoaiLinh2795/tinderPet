import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrl: './introduce.component.scss'
})
export class IntroduceComponent {

  loginStatus : boolean = false;

  loginToggle(){
    this.loginStatus = !this.loginStatus;
  }

  ngOnIniit(){
  }

   imageList = [
    {title : "Những bé mèo đang chờ được nhận nuôi",
      content : "Mong các bạn hãy cho bé một cơ hội trở thành thành viên trong gia đình bạn",
      image : "https://www.hanoipetadoption.com/admin/user-content/Carousel/09f71287-416c-4d28-9532-6a38f1141f1d.jpeg"},
    {title : "Những bé chó đang chờ được nhận nuôi",
      content : "Mong các bạn hãy cho bé một cơ hội trở thành thành viên trong gia đình bạn",
      image : "https://www.hanoipetadoption.com/admin/user-content/Carousel/b7ae8a65-6bf9-4fb8-ae3d-635a887ed5ef.jpeg"},
   ]

   newslist = [
    {title : "Nhóm trẻ tình nguyện tốt bụng",
      content :"Một nhóm các bạn trẻ tốt bụng ở thành phố Bình Dương đăng ký nhận nuôi một ...",
      image : "https://res.cloudinary.com/petrescue/image/upload/h_330,w_330,c_fill,g_face,f_auto,q_auto:best/c_limit,w_700/v1730089127/k4uclwhnqwprdqyqjtjt.jpg"
    },
    {title : " Nhận nuôi mèo bỏ rơi",
      content :"một gia đình tốt bụng vừa nhận nuôi 2 bé mèo khuyết tật ",
      image : "https://res.cloudinary.com/petrescue/image/upload/c_fill,f_auto,g_face,h_500,q_80,w_500/yfj7e4p5cwnsldya8rkg.jpg"
    },
    {
      title: 'Cứu hộ tại đám cháy',
      content:
        'Một đám cháy lớn tại thành phố Long Khánh khiến 200 ngừoi bị thương , thiệt hại hơn ...',
      image:
        'https://image.baophapluat.vn/w840/Uploaded/2024/ibpchuf/2024_12_01/khoi-33-1733047635304839461236-2368.jpg',
    },
    {
      title: 'Cứu hộ tại đám cháy',
      content: 'Một đám cháy lớn tại thành phố Long Khánh khiến 200 ngừoi bị thương , thiệt hại hơn ...',
      image:
        'https://image.baophapluat.vn/w840/Uploaded/2024/ibpchuf/2024_12_01/khoi-33-1733047635304839461236-2368.jpg',
    },
    {
      title: ' Nhận nuôi mèo bỏ rơi',
      content:
        "Một gia đình tốt bụng vừa nhận nuôi 2 bé mèo khuyết tật ",
      image:
        'https://res.cloudinary.com/petrescue/image/upload/c_fill,f_auto,g_face,h_500,q_80,w_500/yfj7e4p5cwnsldya8rkg.jpg',
    },
  ];

   currentImageIndex: number = 0;

   onPage(event: any) {
     console.log(this.currentImageIndex)
     this.currentImageIndex = event.page;
   }

  turnon : boolean = false ;
turn (){
  this.turnon = !this.turnon
}

}
