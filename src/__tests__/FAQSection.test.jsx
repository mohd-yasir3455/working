// src/__tests__/FAQSection.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import FAQSection from '../components/FAQSection';

describe('FAQ Section', () => {
  test('renders the FAQ title', () => {
    render(<FAQSection />);
    const titleElement = screen.getByText(/Frequently Asked Questions/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('displays FAQ questions', () => {
    render(<FAQSection />);
    const questionElement = screen.getByText(/What is BEES Foundation?/i);
    expect(questionElement).toBeInTheDocument();
  });

  test('toggles answer visibility when a question is clicked', () => {
    render(<FAQSection />);
    const questionElement = screen.getByText(/What is BEES Foundation?/i);
    fireEvent.click(questionElement);
    const answerElement = screen.getByText(/BEES Foundation is an NGO focused on reforming society/i);
    expect(answerElement).toBeInTheDocument();
  });
});
