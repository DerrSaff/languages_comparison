import React, {Component} from 'react'

export default class ComparisonTable extends Component {
  componentDidMount() {
    for (let el of document.querySelectorAll('.russian, .polish, .english, .german, .spanish, .french, .italian, .portuguese')) el.style.display = 'none';    
  }
  render() {
    return (
        <table className="comparison_table">
          <thead>
            <tr>
              <th className="service-cell">
                Язык / особенность
              </th>
              <th className="no-language-selected"></th>
              <th className="russian">
                Русский
              </th>
              <th className="polish">
                Польский
              </th>
              <th className="english">
                Английский
              </th>
              <th className="german">
                Немецкий
              </th>
              <th className="spanish">
                Испанский
              </th>
              <th className="french">
                Французский
              </th>
              <th className="italian">
                Итальянский
              </th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td className="language-feature">
                Алфавит
              </td>
              <td rowSpan="3" className="no-language-selected">
                Выберите язык из списка сверху
              </td>
              <td className="table-success russian">
                Кириллица
                <br/>Необычные буквы: Щ, Ъ, Э, Ё
              </td>
              <td className="table-warning polish">
                Латиница
                <br/>Необычные буквы: Ą ą, Ć ć, Ę ę, Ł ł, Ń ń, Ó ó, Ś ś, Ź ź
              </td>
              <td className="table-success english">
                Латиница
              </td>
              <td className="table-success german">
                Латиница
                <br/>Необычные буквы: Ä ä, Ö ö, Ü ü + лигатура ẞ ß
              </td>
              <td className="table-success spanish">
                Латиница
                <br/>Необычные буквы: Ñ ñ. Гласные с диакритикой: á, é, í, ó, ú, ü
              </td>
              <td className="table-warning french">
                Латиница
                <br/>
                Много гласных с диакритикой: Â â, À à, Éé, Êê, Èè, Ëë, Çç, Îî, Ïï, Ôô, Ûû, Ùù,
                Üü, Ÿÿ
              </td>
              <td className="table-warning italian">
                Латиница
                <br/>Много гласных с диакритикой: à, è, é, ì, í, î, ò, ó, ù, ú
              </td>
            </tr>

            <tr>
              <td className="language-feature">
                Диграфы / триграфы
              </td>
              <td className="table-success russian">
                Нет
              </td>
              <td className="table-success polish">
                cz, sz, ch, dz
              </td>
              <td className="table-danger english">
                ae, ai/ay, ea/ee, au/aw, ei/ey, eu/ew, oi/oy, ie/ye, oa, ue/ui, oo, ou, ow, ph,
                th, ch, sh, wh
              </td>
              <td className="table-success german">
                ei, ey, au, äu, eu, ch, sch, tsch
              </td>
              <td className="table-success spanish">
                ch, gu, ll, qu, rr
              </td>
              <td className="french">
                ch,
              </td>
              <td className="italian">
                ch,
              </td>
            </tr>

            <tr>
              <td className="language-feature">
                Фонетика
              </td>
              <td className="table-danger russian">
                <ul>
                  <li>мягкие гласные и согласные;</li>
                  <li>редукция гласных и согласных;</li>
                  <li>разноместное ударение.</li>
                </ul>
              </td>
              <td className="polish"></td>
              <td className="english"></td>
              <td className="german"></td>
              <td className="spanish"></td>
              <td className="french"></td>
              <td className="italian"></td>
            </tr>
          </tbody>
        </table>
    )
  }
}