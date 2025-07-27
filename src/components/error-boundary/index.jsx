import { Component } from 'react';
import { AlertCircle, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex min-h-screen bg-neutral-950 flex-col items-center justify-center  '>
          <div className='flex flex-col items-center !p-4 gap-2 border border-red-50 rounded-2xl  w-[90%]'>
            <div className=' rounded-full'>
              <AlertCircle className='h-10 w-10 text-red-200' />
            </div>
            <p className=' max-w-md text-red-200'>
              {this.state.error?.message || 'An unexpected error occurred. Please try again later.'}
            </p>
            <Button
              variant='default'
              className='!px-4  border border-red-300 text-red-300 cursor-pointer hover:bg-transparent '
              onClick={this.handleReload}>
              Reload App
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
