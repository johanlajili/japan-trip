import fetch from 'cross-fetch'
import { API_KEY, API_TOKEN } from '../secret'
export default class TrelloService {
  static async getJson () {
    const response = await fetch(`https://api.trello.com/1/boards/cW4akBsZ/?fields=name&lists=all&list_fields=all&cards=all&card_fields=all&card_attachments=true&key=${API_KEY}&token=${API_TOKEN}`)
    return await response.json()
  }
}
