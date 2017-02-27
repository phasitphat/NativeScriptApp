import { SigninComponent } from "./components/signin/signin"; // import all page
import { SignupComponent } from "./components/signup/signup";
import { HomeComponent } from "./components/home/home";
import { CartComponent } from "./components/cart/cart";
import { MenuComponent } from "./components/menu/menu";
import { PaymentdetailComponent } from "./components/paymentdetail/paymentdetail";
import { EditprofileComponent } from "./components/editprofile/editprofile";
import { MyorderComponent } from "./components/myorder/myorder";
import { ReportproblemComponent } from "./components/reportproblem/reportproblem";
import { ReportpaymentComponent } from "./components/reportpayment/reportpayment";
import { ContactusComponent } from "./components/contactus/contactus";
import { ProductComponent } from "./components/product/product";
 
export const appRoutes: any = [								// all path 
    { path: "", component: SigninComponent },
    { path: "signup", component: SignupComponent },
    { path: "home", component: HomeComponent },
    { path: "cart", component: CartComponent },
    { path: "menu", component: MenuComponent },
    { path: "paymentdetail", component: PaymentdetailComponent },
    { path: "editprofile", component: EditprofileComponent },
    { path: "myorder", component: MyorderComponent },
    { path: "reportproblem", component: ReportproblemComponent },
    { path: "reportpayment", component: ReportpaymentComponent },
    { path: "contactus", component: ContactusComponent },
    { path: "product", component: ProductComponent }
];
 
export const appComponents: any = [							// define all varaible page
    SigninComponent,
    SignupComponent,
    HomeComponent,
    CartComponent,
    MenuComponent,
    PaymentdetailComponent,
    EditprofileComponent,
    MyorderComponent,
    ReportproblemComponent,
    ReportpaymentComponent,
    ContactusComponent,
    ProductComponent
];