Feature: The Basics
	As a visitor
	I should be able to type my name into input
	So that I can see greetings with my name

	Scenario Outline: Protractor and Cucumber Test
		Given I go to Angular home page
		When I add "<userName>" in the input field
		Then I should see "Hello <userName>!"

		Examples:
			| userName |
			|  Marcin  |
			|  Jan     |