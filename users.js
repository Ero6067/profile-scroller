class Users {
  constructor(count) {
    this.count = count;
  }

  async getUser(count) {
    const response = await fetch (`https://randomuser.me/api/?results=${count}`);

    const responseData = await response.json();
    return responseData;
  }

}