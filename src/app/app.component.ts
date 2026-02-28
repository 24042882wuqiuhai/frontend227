import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
}

ngOnInit() {
  const snowContainer = document.querySelector('.snow-container');

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerText = '❄';

    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = 3 + Math.random() * 5 + 's';
    snowflake.style.fontSize = 10 + Math.random() * 15 + 'px';
    snowflake.style.opacity = Math.random().toString();

    snowContainer?.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 8000);
  }

  setInterval(createSnowflake, 200);
}