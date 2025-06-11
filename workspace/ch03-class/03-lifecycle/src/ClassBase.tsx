import { Component } from "react";

interface ClickMeProps {
  level?: number;
}
interface ClickMeState {
  count: number;
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
        <ClickMe level={10} />
      </div>
    );
  }
}

class ClickMe extends Component<ClickMeProps, ClickMeState> {
  // 1-1 단계 : mounting-constructor()
  constructor(props: ClickMeProps) {
    console.log("1-1constructor가 호출된다");
    super(props);
    this.state = { count: props.level || 1 };
  }

  // 1-2 단계: mounting-static getDerivedStateFromProps(props, state)
  // 2-1 단계: updating-static getDerivedStateFromProps(props, state)
  static getDerivedStateFromProps(props: ClickMeProps, state: ClickMeState) {
    console.log("1-2/2-1 getDerivedStateFromProps 호출한다");
    console.log("\tprops", props);
    console.log("\tstate", state);

    // count가 level의 10배를 초과하면 state를 level의 10배로 제한
    if (state.count / (props.level || 1) > 10) {
      return { count: (props.level || 1) * 10 }; // 새로운 값으로 state 업데이트
    }

    return null; // 상태 업데이트가 필요없는 경우 null 반환
  }

  //2-2 단계: updating-shouldComponentUpdate(nextProps, nextState)
  shouldComponentUpdate(nextProps: ClickMeProps, nextState: ClickMeState) {
    console.log("2-2 shouldComponentUpdate 호출된다");
    console.log("\t현재값", this.props, this.state);
    console.log("\t다음값", nextProps, nextState);
    if (this.props.level === nextProps.level && this.state === nextState) {
      return false; // render 호출 X
    } else {
      return true; // render 호출 O
    }
  }

  increase = () => {
    this.setState({ count: this.state.count + (this.props.level ?? 1) });
  };

  // 1-3 단계 : mounting-render()
  // 2-3 단계 : updating-render()
  render() {
    console.log("1-3/2-3 render 호출된다");
    console.log(document.querySelector("button")?.textContent);

    // API 서버로부터 테이터 페칭 X
    return (
      <div>
        클릭 횟수 X {this.props.level}: {this.state.count}
        <button onClick={this.increase}>클릭</button>
      </div>
    );
  }

  //1-4 단계 : mounting-componentDidMount() (함수형 컴포넌트에서는 useEffect로 사용 가능)
  // 함수형 컴포넌트에서는 useEffect() 훅이 이 역할을 함
  componentDidMount() {
    // API 서버로부터 데이터 페칭과 같은 side effect가 발생하는 작업은 이곳에서 작성
    console.log("1-4 componentDidMount 호출된다");
    console.log(document.querySelector("button")?.textContent);
  }

  // 2-4 단계: updating-getSnapshotBeforeUpdate(prevProps, prevState)
  getSnapshotBeforeUpdate(preveProps: ClickMeProps, prevState: ClickMeState) {
    console.log("2-4 getSnapshotBeforeUpdate 호출된다");
    return "hello";
  }

  // 2-5 단게: updating-componentDidUpdate(prevProps, prevState, snapshot) (함수형 컴포넌트에서는 useEffect로 사용 가능)
  componentDidUpdate(
    prevProps: ClickMeProps,
    prevState: ClickMeState,
    snapshot: string
  ) {
    console.log("2-5 componentDidUpdate 호출됨.");
    console.log("\t이전값", prevProps, prevState);
    console.log("\t현재값", this.props, this.state);
    console.log("\tsnapshot", snapshot);
  }

  //3-1단계: unmounting-componentWillUnmount() (함수형 컴포넌트에서는 useEffect로 사용 가능)

  componentWillUnmount(): void {
    console.log("3-1 componentWillUnmount 호출된다");
  }
}

export default Parent;
