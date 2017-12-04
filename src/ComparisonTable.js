import React, {Component} from 'react'

export default class ComparisonTable extends Component {
  componentDidMount() {
    for (let el of document.querySelectorAll('.russian, .polish, .english, .german, .spanish, .french, .italian, .portuguese')) 
      el.style.display = 'none';
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
            <td className="language-feature category">
              Характеристика языка
            </td>
            <td rowSpan="50" className="no-language-selected centered-text">
              Выберите язык из списка сверху
            </td>
            <td className="table-success russian">
              <ul>
                <li>Восточнославянская группа</li>
                <li>Общее число носителей в мире ~ 260 млн человек</li>
                <li>Преимущественно флективный, синтетический.</li>
              </ul>
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Алфавит
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

          <tr>
            <td className="language-feature">
              Артикль
            </td>
            <td className="table-success russian">
              Нет.
            </td>
            <td className="polish">
              Нет.
            </td>
            <td className="table-warning english">
              <ul>
                <li>Определённый "the".</li>
                <li>Неопределённый "a" или "an".</li>
              </ul>
            </td>
            <td className="table-danger german">
              <ul>
                <li>Зависит от рода, числа и падежа.</li>
                <li>Определённый "der", "die", "das" и его формы.</li>
                <li>Неопределённый "ein" и его формы.</li>
              </ul>
            </td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature category">
              Имя существительное
            </td>
            <td className="service-cell" colspan="8"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Род
            </td>
            <td className="table-danger russian">Три основных рода: мужской, женский. Также есть общий и парный род.</td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Падеж
            </td>
            <td className="table-danger russian">
              Шесть основных падежей:
              <ul>
                <li>именительный,</li>
                <li>родительный,</li>
                <li>дательный,</li>
                <li>винительный,</li>
                <li>творительный,</li>
                <li>предложный.</li>
              </ul>
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Одушевлённость
            </td>
            <td className="table-success russian">
              Одушевлённые - названия лиц и животных. Неодушевлённые - всё остальное.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Число
            </td>
            <td className="table-success russian">
              Единственное, множественное. Двойственное как особая форма.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Склонение
            </td>
            <td className="table-success russian">
              Три склонения.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature category">
              Глагол
            </td>
            <td className="service-cell" colspan="8"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Род
            </td>
            <td className="table-success russian">
              Три: мужской, женский, средний.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Число
            </td>
            <td className="table-success russian">
              Два: единственное, множественное.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Аспект
            </td>
            <td className="table-warning russian">
              Совершенный и несовершенный вид.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Время
            </td>
            <td className="table-success russian">
              Прошлое, настоящее, будущее.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Наклонение
            </td>
            <td className="table-success russian">
              Три: изъявительное, условное, повелительное.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Залог
            </td>
            <td className="table-success russian">
              Два: действительный (актив), страдательный (пассив).
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Спряжение
            </td>
            <td className="table-success russian">
              Два спряжения.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature category">
              Имя прилагательное
            </td>
            <td className="service-cell" colspan="8"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Характеристика
            </td>
            <td className="table-success russian">
              Может иметь краткую форму.
              <br/>
              Три разряда прилагательных:
              <ul>
                <li>качественные</li>
                <li>относительные</li>
                <li>притяжательные</li>
              </ul>
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Род
            </td>
            <td className="table-success russian">
              Три: мужской, женский, средний.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Падеж
            </td>
            <td className="table-warning russian">
              Склоняется по падежам в зависимости от существительного.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Число
            </td>
            <td className="table-success russian">
              Два: единственное, множественное.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Степени сравнения
            </td>
            <td className="table-success russian">
              Положительная, сравнительная, превосходная.
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature category">
              Имя числительное
            </td>
            <td className="service-cell" colspan="8"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Характеристика
            </td>
            <td className="table-success russian">
              Делится на четыре разряда:
              <ul>
                <li>количественные,</li>
                <li>собирательные,</li>
                <li>порядковые,</li>
                <li>дробные.</li>
              </ul>
            </td>
            <td className="polish"></td>
            <td className="english"></td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Сочетание
            </td>
            <td className="table-danger russian">
              Изменяется по числу, роду, падежу.
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