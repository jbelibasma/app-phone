const AffichageComponent = {
    template: `
    <div class="review-container"><ul>
    <li>{{pseudo}}<li>
    <li>{{message}}</li>
    <li>{{note}}</li>
    </ul></div>`,
    props:["pseudo","message","note"],
}
export default AffichageComponent