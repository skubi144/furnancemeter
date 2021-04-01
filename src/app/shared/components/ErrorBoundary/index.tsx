import React from "react";
import { toast } from "react-toastify";
interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(err: any): ErrorBoundaryState {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    //toast.error("Napotkano niespodziewany błąd",{onClose:()=>{this.props.history.push("/")}})
    console.log(error, errorInfo);
    this.setState({ hasError: true });
  }
  render(): React.ReactNode {
    switch (this.state.hasError) {
      case true:
        return <h1>Zastępcze UI</h1>;
      default:
        return this.props.children;
    }
  }
}
export default ErrorBoundary;
