import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe,",
      "This is a simple test",
      "https://lh3.googleusercontent.com/proxy/_sVv50xFl4CAWuSlmBdngO1ivNRRiYDCVV_4koSfVrou2xOmToZl_u1FtgeRVvIF4gQJQdMfYzz4XYFj8yGNnwGEiw_kuc-UXcmD_K_fFo8z9eN2OoIfi4hgRvdbD7GrZUtVkAM7DbFjtnm4tiAE"
    ),
    new Recipe(
      "Test Recipe,",
      "This is a simple test",
      "https://lh3.googleusercontent.com/proxy/_sVv50xFl4CAWuSlmBdngO1ivNRRiYDCVV_4koSfVrou2xOmToZl_u1FtgeRVvIF4gQJQdMfYzz4XYFj8yGNnwGEiw_kuc-UXcmD_K_fFo8z9eN2OoIfi4hgRvdbD7GrZUtVkAM7DbFjtnm4tiAE"
    ),
    new Recipe(
      "Test Recipe,",
      "This is a simple test",
      "https://lh3.googleusercontent.com/proxy/_sVv50xFl4CAWuSlmBdngO1ivNRRiYDCVV_4koSfVrou2xOmToZl_u1FtgeRVvIF4gQJQdMfYzz4XYFj8yGNnwGEiw_kuc-UXcmD_K_fFo8z9eN2OoIfi4hgRvdbD7GrZUtVkAM7DbFjtnm4tiAE"
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
