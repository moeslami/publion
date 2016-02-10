import {Component, OnInit} from 'angular2/core';

declare var $: any;

@Component({
    selector: 'login-modal',
    templateUrl: 'shared/loginmodal.component.html'
})
export class LoginModalComponent implements OnInit {

	ngOnInit() {
		$(document).ready(function() {
			$(document).on('click', '.signup-tab', function(e) {
				e.preventDefault();
				$('#signup-taba').tab('show');
			});

			$(document).on('click', '.signin-tab', function(e) {
				e.preventDefault();
				$('#signin-taba').tab('show');
			});

			$(document).on('click', '.forgetpass-tab', function(e) {
				e.preventDefault();
				$('#forgetpass-taba').tab('show');
			});
		});
	}
}