import React from 'react';
import BarGraph from './EducatorBarGraph';
import QuestionButton from './QuestionButton';
import renderCorrectGraphType from '../../helpers/renderCorrectGraphType';

export default React.createClass({

  render: function() {
    if(this.props.questionType === 'open') {
      return (
        <div>
        <p>{this.props.openResponseAnswers}</p>
        <button className="btn orange request-btn white-text end-thumb-check" onClick={this.props.stopVote}>
          END VOTE
        </button>
        <QuestionButton {...this.props}/>
        </div>
      )
    } else {
      return (
        <div className="results-container">
          <BarGraph ref="resultsDisplay" lastOrCurrent="current-result-graph" {...this.props} />
          {renderCorrectGraphType(this.props)}
          <div>
            <span className="up-thumb-count">Thumbs up count: {this.props.upCount}</span>
            <span className="down-thumb-count move-right">Thumbs down count: {this.props.downCount}</span>
          </div>
          <button className="btn orange request-btn white-text end-thumb-check" onClick={this.props.stopVote}>
          END VOTE
          </button>
          <QuestionButton {...this.props}/>
        </div>
      );
    }

  }
});
