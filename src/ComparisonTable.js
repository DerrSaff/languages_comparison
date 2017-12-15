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
            <td className="russian">
              <ul>
                <li>Восточнославянская группа;</li>
                <li>Общее число носителей в мире ~ 260 млн человек;</li>
                <li>Преимущественно флективный, синтетический язык;</li>
                <li>Свободный порядок слов (SVO).</li>
              </ul>
            </td>
            <td className="polish">
              <ul>
                <li>Западнославянская группа;</li>
                <li>Общее число носителей в мире ~ 40 млн человек;</li>
                <li>Преимущественно флективный, синтетический язык.</li>
                <li>Свободный порядок слов (SVO).</li>
              </ul>
            </td>
            <td className="english">
              <ul>
                <li>Западногерманская группа;</li>
                <li>Общее число носителей в мире ~ 603 млн человек;</li>
                <li>Аналитический язык;</li>
                <li>Фиксированный порядок слов (SVO).</li>
              </ul>
            </td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Алфавит
            </td>
            <td className="difficulty-easy russian">
              Кириллица
              <br/>Необычные буквы: Щ, Ъ, Э, Ё
            </td>
            <td className="difficulty-medium polish">
              Латиница
              <br/>Необычные буквы: Ą ą, Ć ć, Ę ę, Ł ł, Ń ń, Ó ó, Ś ś, Ź ź
            </td>
            <td className="difficulty-easy english">
              Латиница
            </td>
            <td className="difficulty-easy german">
              Латиница
              <br/>Необычные буквы: Ä ä, Ö ö, Ü ü + лигатура ẞ ß
            </td>
            <td className="difficulty-easy spanish">
              Латиница
              <br/>Необычные буквы: Ñ ñ. Гласные с диакритикой: á, é, í, ó, ú, ü
            </td>
            <td className="difficulty-medium french">
              Латиница
              <br/>
              Много гласных с диакритикой: Â â, À à, Éé, Êê, Èè, Ëë, Çç, Îî, Ïï, Ôô, Ûû, Ùù,
              Üü, Ÿÿ
            </td>
            <td className="difficulty-medium italian">
              Латиница
              <br/>Много гласных с диакритикой: à, è, é, ì, í, î, ò, ó, ù, ú
            </td>
          </tr>

          <tr>
            <td className="language-feature">
              Диграфы / триграфы
            </td>
            <td className="difficulty-easy russian">
              Нет
            </td>
            <td className="difficulty-easy polish">
              cz, sz, ch, dz
            </td>
            <td className="difficulty-high english">
              ae, ai/ay, ea/ee, au/aw, ei/ey, eu/ew, oi/oy, ie/ye, oa, ue/ui, oo, ou, ow, ph,
              th, ch, sh, wh
            </td>
            <td className="difficulty-easy german">
              ei, ey, au, äu, eu, ch, sch, tsch
            </td>
            <td className="difficulty-easy spanish">
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
            <td className="difficulty-high russian">
              <ul>
                <li>мягкие гласные и согласные;</li>
                <li>редукция гласных и согласных;</li>
                <li>разноместное ударение.</li>
              </ul>
            </td>
            <td className="difficulty-high polish">
              <ul>
                <li>носовые гласные (на деле - сочетание чистых гласных с носовыми согласными);</li>
                <li>отсутствие редукции безударных гласных;</li>
                <li>мягкие гласные и согласные;</li>
                <li>много всяких шипящих звуков;</li>
                <li>ударение почти всегда ставится на предпоследний слог.</li>
              </ul>
            </td>
            <td className="difficulty-medium english">
              <ul>
                <li>почти полное отсутствие палатализованных согласных;</li>
                <li>отсутствие оглушения конечных звонких согласных;</li>
                <li>сильная редукция гласных;</li>
                <li>редкая ассимиляция и диссимиляция звуков;</li>
                <li>разноместное ударение;</li>
                <li>необычные звуки - межзубные [θ] и [ð].</li>
              </ul>
            </td>
            <td className="german"></td>
            <td className="spanish"></td>
            <td className="french"></td>
            <td className="italian"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Артикль
            </td>
            <td className="difficulty-easy russian">
              Нет.
            </td>
            <td className="difficulty-easy polish">
              Нет.
            </td>
            <td className="difficulty-medium english">
              <ul>
                <li>Определённый "the".</li>
                <li>Неопределённый "a" или "an".</li>
              </ul>
            </td>
            <td className="difficulty-high german">
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
            <td className="difficulty-high russian">Три основных рода: мужской, средний, женский. Также есть общий и парный род.</td>
            <td className="difficulty-high polish">Три рода: мужской, средний, женский.
            </td>
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
            <td className="difficulty-high russian">
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
            <td className="difficulty-high polish">
              Семь падежей:
              <ul>
                <li>именительный,</li>
                <li>родительный,</li>
                <li>дательный,</li>
                <li>винительный,</li>
                <li>творительный,</li>
                <li>предложный,</li>
                <li>звательный.</li>
              </ul>
            </td>
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
            <td className="difficulty-easy russian">
              Одушевлённые - названия лиц и животных. Неодушевлённые - всё остальное.
            </td>
            <td className="difficulty-easy polish">
              Одушевлённые - названия лиц и животных. Неодушевлённые - всё остальное.
            </td>
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
            <td className="difficulty-easy russian">
              Единственное, множественное. Двойственное как особая форма.
            </td>
            <td className="difficulty-easy polish">
              Единственное, множественное. Двойственное как особая форма.
            </td>
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
            <td className="difficulty-medium russian">
              Три склонения.
            </td>
            <td className="difficulty-medium polish">
              Три склонения.
            </td>
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
            <td className="difficulty-easy russian">
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
            <td className="difficulty-easy russian">
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
            <td className="difficulty-medium russian">
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
            <td className="difficulty-easy russian">
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
            <td className="difficulty-easy russian">
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
            <td className="difficulty-easy russian">
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
            <td className="difficulty-easy russian">
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
            <td className="difficulty-easy russian">
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
            <td className="difficulty-easy russian">
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
            <td className="difficulty-medium russian">
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
            <td className="difficulty-easy russian">
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
            <td className="difficulty-easy russian">
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
            <td className="difficulty-easy russian">
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
            <td className="difficulty-high russian">
              Изменяется по числу, роду, падежу.
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
              Местоимение
            </td>
            <td className="service-cell" colspan="8"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Характеристика
            </td>
            <td className="difficulty-easy russian">
              Разряды:
              <ul>
                <li>личные,</li>
                <li>притяжательные,</li>
                <li>возвратные,</li>
                <li>неопределённые,</li>
                <li>указательные,</li>
                <li>вопросительные,</li>
                <li>относительные,</li>
                <li>взаимные,</li>
                <li>определительные,</li>
                <li>отрицательные.</li>
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
            <td className="language-feature category">
              Наречие
            </td>
            <td className="service-cell" colspan="8"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Характеристика
            </td>
            <td className="difficulty-easy russian">
              Неизменяемое. Делятся на обстоятельственные и определительные. Наречия,
              образованные от качественных прилагательных, имеют степени сравнения
              (сравнительную, превосходную).
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
              Предлог
            </td>
            <td className="service-cell" colspan="8"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Характеристика
            </td>
            <td className="difficulty-medium russian">
              Делятся на простые, сложные и составные.
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
              Союз
            </td>
            <td className="service-cell" colspan="8"></td>
          </tr>

          <tr>
            <td className="language-feature">
              Характеристика
            </td>
            <td className="difficulty-medium russian">
              По составу делятся на простые, сложные и составные. По значению делятся на
              сочинительные и подчинительные.
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