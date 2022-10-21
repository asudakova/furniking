document.addEventListener('DOMContentLoaded', function() {
   
   //for the first voucher's time countdown
   const daysHTML1 = document.querySelector('.voucher__time-first .voucher__days');
   const hrsHTML1 = document.querySelector('.voucher__time-first .voucher__hrs');
   const minsHTML1 = document.querySelector('.voucher__time-first .voucher__mins');
   const secsHTML1 = document.querySelector('.voucher__time-first .voucher__secs');

   const deadline1 = new Date();
   deadline1.setDate(deadline1.getDate() + +daysHTML1.textContent);
   deadline1.setHours(deadline1.getHours() + +hrsHTML1.textContent);
   deadline1.setMinutes(deadline1.getMinutes() + +minsHTML1.textContent);
   deadline1.setSeconds(deadline1.getSeconds() + +secsHTML1.textContent);

   new CountdownTimer(deadline1, (timer) => {
      daysHTML1.innerHTML = timer.days;
      hrsHTML1.innerHTML = timer.hours;
      minsHTML1.innerHTML = timer.minutes;
      secsHTML1.innerHTML = timer.seconds;
   }); 

   //for the second voucher's time countdown
   const daysHTML2 = document.querySelector('.voucher__time-second .voucher__days');
   const hrsHTML2 = document.querySelector('.voucher__time-second .voucher__hrs');
   const minsHTML2 = document.querySelector('.voucher__time-second .voucher__mins');
   const secsHTML2 = document.querySelector('.voucher__time-second .voucher__secs');

   const deadline2 = new Date();
   deadline2.setDate(deadline2.getDate() + +daysHTML2.textContent);
   deadline2.setHours(deadline2.getHours() + +hrsHTML2.textContent);
   deadline2.setMinutes(deadline2.getMinutes() + +minsHTML2.textContent);
   deadline2.setSeconds(deadline2.getSeconds() + +secsHTML2.textContent);

   new CountdownTimer(deadline2, (timer) => {
      daysHTML2.innerHTML = timer.days;
      hrsHTML2.innerHTML = timer.hours;
      minsHTML2.innerHTML = timer.minutes;
      secsHTML2.innerHTML = timer.seconds;
   });

});

class CountdownTimer {
   constructor(deadline, cbChange) {
      this.deadline = deadline;
      this.cbChange = cbChange;
      this.timerId = null;
      this.out = {
         days: '', hours: '', minutes: '', seconds: ''};
      this.start();
   }
   start() {
      this.calc();
      this.timerId = setInterval(this.calc.bind(this), 1000);
   }
   calc() {
      const diff = this.deadline - new Date();
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      this.out.days = CountdownTimer.addS('day', days);
      this.out.hours = CountdownTimer.addS('hr', hours);
      this.out.minutes = CountdownTimer.addS('min', minutes);
      this.out.seconds = CountdownTimer.addS('sec', seconds);

      this.cbChange ? this.cbChange(this.out) : null;
      if (diff <= 0) {
         clearInterval(this.timerId);
      }
   }
   static addS(part, amount) {
      return (amount <= 1) ? `0${amount} <span>${part}</span>` : (amount < 10) ? (`0${amount} <span>${part}s</span>`) : (`${amount} <span>${part}s</span>`);
   }
}