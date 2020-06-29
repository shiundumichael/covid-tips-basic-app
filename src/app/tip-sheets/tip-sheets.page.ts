import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-tip-sheets",
  templateUrl: "./tip-sheets.page.html",
  styleUrls: ["./tip-sheets.scss"],
})
export class TipSheetsPage implements OnInit {
  tipSheets = TIP_SHEETS;
  // note - options passed to swiper api: https://swiperjs.com/api/
  slideOptions: IonSlides["options"] = {
    autoHeight: true,
  };
  @ViewChild("slides", { static: true }) slides: IonSlides;

  constructor() {}
  ngOnInit() {}

  slideTo(index: number) {
    this.slides.slideTo(index);
  }

  slideDidChange() {}
}

const TIP_SHEETS = [
  {
    title: "One-on-One Time",
    number: 1,
  },
  {
    title: "Keeping It Positive",
    number: 2,
  },
  {
    title: "Structure Up",
    number: 3,
  },
  {
    title: "Bad Behavior",
    number: 4,
  },
  {
    title: "Keep Calm and Manage Stress",
    number: 5,
  },
  {
    title: "Talking about Demo-1-19",
    number: 6,
  },
  {
    title: "Learning Through Play",
    number: 7,
  },
  {
    title: "When we get Angry",
    number: 8,
  },
  {
    title: "Parenting in Crowded Homes and Communities",
    number: 9,
  },
  {
    title: "Family Harmony at Home",
    number: 10,
  },
  {
    title: "Family Budgeting in times of Financial Stress",
    number: 11,
  },
  {
    title: "Keeping Children Safe Online",
    number: 12,
  },
  {
    title: "Tips for Children with Disabilities",
    number: 13,
  },
  {
    title: "Tips for Parenting Teens",
    number: 14,
  },
  {
    title: "Parenting a New Baby?",
    number: 15,
  },
];