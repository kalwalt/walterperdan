import CMS from "netlify-cms";

//import { SlidesControl, SlidesPreview } from "./Slides";
import { CategoriesControl, CategoriesPreview } from "./Categories";

//CMS.registerWidget("slides", SlidesControl, SlidesPreview);
CMS.registerWidget('categories', CategoriesControl, CategoriesPreview);
