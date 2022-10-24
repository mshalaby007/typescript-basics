import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`)

//run command
//tsc *.ts --target ES5 && node main.js && rm *.js
