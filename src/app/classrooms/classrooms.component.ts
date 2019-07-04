import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss']
})
export class ClassroomsComponent implements OnInit {
  classroomList = [
    {id: 0, name: 'Bear', ageGroup: 'Infants', ages: '6 weeks - 12 months',
      photo: '../../assets/img/classroomPhotos/stock/bear.jpg'},
    {id: 1, name: 'Lion', ageGroup: 'Infants', ages: '6 weeks - 12 months',
      photo: '../../assets/img/classroomPhotos/stock/lion.jpg'},
    {id: 2, name: 'Giraffe', ageGroup: 'Infants', ages: '6 weeks - 12 months',
      photo: '../../assets/img/classroomPhotos/stock/giraffe.jpg'},
    {id: 3, name: 'Lamb', ageGroup: 'Infant/Toddler', ages: '9 months - 17 months',
      photo: '../../assets/img/classroomPhotos/stock/lamb.jpg'},
    {id: 4, name: 'Elephant', ageGroup: 'Toddlers', ages: '12 months - 24 months',
      photo: '../../assets/img/classroomPhotos/stock/elephant.jpg'},
    {id: 5, name: 'Bee', ageGroup: 'Toddlers', ages: '20 months - 2 1/2 years',
      photo: '../../assets/img/classroomPhotos/stock/bee.jpg'},
    {id: 6, name: 'Zebra', ageGroup: 'Toddlers', ages: '2 years - 2 1/2 years',
      photo: '../../assets/img/classroomPhotos/stock/zebra.jpg'},
    {id: 7, name: 'Dolphin', ageGroup: 'Preschool', ages: '2 1/2 years - 3 years',
      photo: '../../assets/img/classroomPhotos/stock/dolphin.jpg'},
    {id: 8, name: 'Tiger', ageGroup: 'Preschool', ages: '2 1/2 years - 3 years',
      photo: '../../assets/img/classroomPhotos/stock/tiger.jpg'},
    {id: 9, name: 'Hippo', ageGroup: 'Preschool', ages: '3 years - 4 years',
      photo: '../../assets/img/classroomPhotos/stock/hippo.jpg'},
    {id: 10, name: 'Penguin', ageGroup: 'Preschool', ages: '3 years - 4 years',
      photo: '../../assets/img/classroomPhotos/stock/penguin.jpg'},
    {id: 11, name: 'Rhino', ageGroup: 'Pre-Kindergarten', ages: '4 years - 5 years',
      photo: '../../assets/img/classroomPhotos/stock/rhino.jpg'},
    {id: 12, name: 'Owl', ageGroup: 'Pre-Kindergarten', ages: '4 years - 5 years',
      photo: '../../assets/img/classroomPhotos/stock/owl.jpg'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
