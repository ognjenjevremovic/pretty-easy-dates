const periods = {
  keyword: 'now',
  toReturn: {
    currentDate, currentTime
  },

  //  Getters
  get date() {
    this.calc();
    return this.toReturn;
  },
  get period() {
    return this.keyword;
  },

  //  Setters
  set date(date) {
    this.toReturn = date;
  },
  set period(keyword = 'now') {
    this.keyword = keyword.toLowerCase();
  },

  //  Get the date && time values
  calc() {
    for (let period in keywords) {
      if (keywords[period].includes(this.keyword)) {
        switch (period) {
          case 'lastYear':
            this.toReturn.currentDate = new Date(currentTime - timeframes.year);
            this.toReturn.currentTime = this.toReturn.currentDate.getTime();
            break;
          case 'lastMonth':
            this.toReturn.currentDate = new Date(currentTime - timeframes.month);
            this.toReturn.currentTime = this.toReturn.currentDate.getTime();
            break;
          case 'lastWeek':
            this.toReturn.currentDate = new Date(currentTime - timeframes.week);
            this.toReturn.currentTime = this.toReturn.currentDate.getTime();
            break;
          case 'yesterday':
            this.toReturn.currentDate = new Date(currentTime - timeframes.day);
            this.toReturn.currentTime = this.toReturn.currentDate.getTime();
            break;
          case 'today':
            this.toReturn = currentDate;
            this.toReturn = currentTime;
            break;
          case 'tomorrow':
            this.toReturn.currentDate = new Date(currentTime + timeframes.day);
            this.toReturn.currentTime = this.toReturn.currentDate.getTime();
            break;
          case 'nextWeek':
            this.toReturn.currentDate = new Date(currentTime + timeframes.week);
            this.toReturn.currentTime = this.toReturn.currentDate.getTime();
            break;
          case 'nextMonth':
            this.toReturn.currentDate = new Date(currentTime + timeframes.month);
            this.toReturn.currentTime = this.toReturn.currentDate.getTime();
            break;
          case 'nextYear':
            this.toReturn.currentDate = new Date(currentTime + timeframes.year);
            this.toReturn.currentTime = this.toReturn.currentDate.getTime();
            break;
          default:
            //  should not occur!
        }
      }
    }
  }
};
