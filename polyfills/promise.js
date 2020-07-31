function Promise(executer) {
	let status = 'pending';
	let successCallback = null;
	let failureCallback = null;
	executer(resolve, reject);
	
	function resolve(data) {
		status = 'fulfilled';
		if(typeof successCallback === 'function') {
			successCallback(data);
		}
	}

	function reject(error) {
	   status = 'rejected';
		if(typeof failureCallback === 'function') {
			failureCallback(error);
		}
	}

	function then(success) {
		successCallback = success;
	}

	function catchError(failure) {
		failureCallback = failure;
	}
	
	return {
		status,
		then,
		catch: catchError
	}
}