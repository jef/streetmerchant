name: Feature Request
description: Formalize a feature request from GitHub Discussions
title: "[Feature]: "
labels:
  - 'type: feature'
body:
  - type: textarea
    id: proposed-solution
    attributes:
      label: Proposed solution
      description: What is solution to this feature request?
      placeholder: Solution description.
    validations:
      required: true
  - type: textarea
    id: objective
    attributes:
      label: Objective
      description: Link to discussion.
      placeholder: https://github.com/jef/streetmerchant/discussions
    validations:
      required: true
  - type: textarea
    id: goals
    attributes:
      label: Goals
      description: What is the purpose of feature request?
      placeholder: Add all relevant goals.
  - type: textarea
    id: non-goals
    attributes:
      label: Non-goals
      description: What else could be accomplished with this feature request, but is currently out of scope?
      placeholder: Add all relevant non-goals.
  - type: textarea
    id: anti-goals
    attributes:
      label: Anti-goals
      description: What could go wrong (side effects) if we implement this feature request?
      placeholder: Add all relevant anti-goals.
