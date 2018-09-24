import React from 'react'

export default ExampleWork => (
      <section className="section section--alignCentered section--description">

        <ExampleWorkBubble 
          link="https://xpenses-app-react.herokuapp.com/" 
          name="Xpenses App" 
          image="images/example1.png"/>

        <ExampleWorkBubble link="https://notes-redux.herokuapp.com/" name="Notes App" image="images/example2.png"/>     
    </section>
  )


class ExampleWorkBubble extends React.Component {
  render() {
    return (
      <div className="section__exampleWrapper">
        <div className="section__example">
          <a href={this.props.link}>
          

            <img alt="notes app image"
               className="section__exampleImage"
               src={this.props.image}/>

          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered ">
              {this.props.name}
            </dt>
            <dd></dd>
          </dl>
          </a>
        </div> 
      </div>
    )
  }
}